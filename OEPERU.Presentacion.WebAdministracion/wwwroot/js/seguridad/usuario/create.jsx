(function () {
    const { useState, useEffect, Fragment, useContext } = React;
    const { Col, Row, Spinner } = ReactBootstrap
    const { CInput, CSelect, CBreadcrumbs, CButton, Icon, CFlags, CPagination, handleError, AppContext, localSt, generateId } = Global
    const { useForm, Controller } = ReactHookForm;

    let smart = {
        urlContext: '/Seguridad/Usuario',
        urlSave: '/Save',
        urlGetSingle: '/GetSingle',
        urlGetRolList: '/Seguridad/Rol/GetList',
        urlGetCatalogoEstadoList: '/Administracion/CatalogoEstado/GetList',
    }

    const ViewIntl = ({ intl }) => {

        const appContext = useContext(AppContext);

        const [allDisabled, setAllDisabled] = useState(false)

        const [rendered, setRendered] = useState(false)
        //creación de manejadores
        const [dataEstado, setDataEstado] = useState([])
        const [dataRegion, setDataRegion] = useState([])
        const [cambiarContrasenia, setCambiarContrasenia] = useState(true)
        const [inputContrasenia, setInputContrasenia] = useState(true)
        const [autogenerar, setAutogenerar] = useState(false)
        const [dataRol, setDataRol] = useState([])
        const [codigo, setCodigo] = useState('')
        const [l_save, setL_save] = useState(false)
        const [s_buttonSave, setS_buttonSave] = useState(false)

        //registro de formulario
        const { register, formState: { errors }, handleSubmit, setValue, control, watch } = useForm();

        useEffect(() => {
            ID = document.querySelector('#id').value;

            let menuPermiso = appContext.menuPermiso("seguridad/usuario");

            axios.all([menuPermiso]).
                then(response => {
                    setRendered(true)
                }).
                catch(error => {
                    setRendered(true)
                    console.log("error")
                });

        }, [])


        useEffect(() => {
            if (rendered) {

                let estadoListar = catalogoEstadoBuscar(1);
                let regionListar = catalogoEstadoBuscar(2);
                let rolListar = rolBuscar();


                axios.all([estadoListar, regionListar, rolListar]).
                    then(response => {
                        if (ID) {

                            setS_buttonSave(appContext.permisos.esUsuarioEditar)

                            getSingle();

                        }
                        else {
                            setS_buttonSave(appContext.permisos.esUsuarioCrear)

                            if (!appContext.permisos.esUsuarioCrear) {
                                setAllDisabled(true);
                            }

                            setInputContrasenia(false)
                            let setContrasenia = document.querySelector('#cambiarContraseniaCheck').remove()

                            appContext.handleBreadcumb(true, [
                                { url: '', name: "Seguridad" },
                                { url: '/seguridad/Usuario/', name: "Usuario" },
                                { url: '', name: "Crear" },
                            ]);

                        }
                    }).catch(error => {
                        console.log("error");
                    })

            }
        }, [rendered])

        const getSingle = () => {

            AXIOS.get(`${smart.urlContext}${smart.urlGetSingle}`, {
                params: {
                    id: ID
                }
            })
                .then(({ data: resSingle }) => {
                    if (resSingle.apiEstado === 'ok') {

                        if (appContext.permisos.esUsuarioSoloConsultar) {
                            setAllDisabled(true);
                        }

                        if (!appContext.permisos.esUsuarioEditar) {
                            setAllDisabled(true);
                        }

                        setCodigo(resSingle.codigo)
                        setValue('nombre', resSingle.nombre)
                        setValue('apellido', resSingle.apellido)
                        setValue('idRegion', resSingle.idRegion)
                        setValue('documento', resSingle.documento)
                        setValue('telefono', resSingle.telefono)
                        setValue('correo', resSingle.usuario)
                        setValue('idRol', resSingle.idRol)
                        setValue('rol', resSingle.rol)
                        setValue('estado', resSingle.idEstado)

                        setCambiarContrasenia(false);

                        appContext.handleBreadcumb(true, [
                            { url: '', name: "Seguridad" },
                            { url: '/seguridad/Usuario/', name: "Usuario" },
                            { url: '', name: "Editar" },
                        ]);

                    }
                })
                .catch(error => {
                    setAllDisabled(true);
                    handleError(error);
                })
        };

        /*Estado y Región*/
        const catalogoEstadoBuscar = (_tipo) => {
            /*
            Tipos :
            1.- Estado
            2.- Región
            */

            let _codigo = 0;

            if (_tipo == 1) {
                _codigo = 10401;
            }
            else if (_tipo == 2) {
                _codigo = 10402;
            }

            let params = {
                codigo: _codigo
            };

            let listar = AXIOS.get(`${smart.urlGetCatalogoEstadoList}`, { params })
                .then(({ data }) => {
                    if (data.apiEstado == "ok") {

                        if (_tipo == 1) {
                            setDataEstado(data.data);
                            setValue('idRegion', 1);
                        }
                        else if (_tipo == 2) {
                            setDataRegion(data.data);
                            setValue('estado', 1);
                        }

                    }
                    else {
                        if (_tipo == 1) {
                            setDataEstado([]);
                        }
                        else if (_tipo == 2) {
                            setDataRegion([]);
                        }
                    }
                })
                .catch((error) => {

                    if (_tipo == 1) {
                        setDataEstado([]);
                    }
                    else if (_tipo == 2) {
                        setDataRegion([]);
                    }

                    handleError(error, false);
                });

            return listar;
        }

        const rolBuscar = () => {

            let params = {
                ordenamiento: 'nombre asc',
                pagina: 0
            };

            var rolListar = AXIOS.get(`${smart.urlGetRolList}`, { params })
                .then(({ data: roles }) => {

                    if (roles.apiEstado == "ok") {
                        setDataRol(roles.data);
                    }
                    else {
                        setDataRol([]);
                    }
                })
                .catch((error) => {
                    setDataRol([]);

                    handleError(error, false);
                })

            return rolListar;
        }

        const handleSave = (data) => {
            if (l_save) return
            setL_save(true)

            let pushData = {
                'id': ID,
                'nombre': data.nombre,
                'apellido': data.apellido,
                'idRegion': data.idRegion,
                'documento': data.documento,
                'telefono': data.telefono,
                'correo': data.correo,
                'idRol': data.idRol,
                "contrasenia": data.contrasenia,
                "cambiarContrasenia": cambiarContrasenia,
                'estado': data.estado
            }

            AXIOS.post(smart.urlContext + smart.urlSave, pushData)
                .then(({ data }) => {
                    if (data.apiEstado === 'ok') {
                        swal({
                            title: data.apiMensaje,
                            // text: data.apiMensaje,
                            icon: "success",
                        })
                        appContext.handleBreadcumb(true, [
                            { url: '', name: "Seguridad" },
                            { url: '/seguridad/Usuario/', name: "Usuario" },
                            { url: '', name: "Editar" },
                        ]);

                        if (!ID) {
                            setCodigo(data.codigo);
                            ID = data.id;
                        }

                        setCambiarContrasenia(false);
                    } else {
                        swal({
                            // title: data.apiMensaje,
                            text: data.apiMensaje,
                            icon: "error",
                        })
                    }

                    setL_save(false);
                })
                .catch(error => {
                    setL_save(false)
                    handleError(error);
                })
        }

        const handleChange = (e) => {
            let name = e.target.name;
            let value = e.target.value;
            let checked = e.target.checked;

            if (name === "cambiarContrasenia") {
                setCambiarContrasenia(checked)
                setInputContrasenia(!checked)
                setValue('contrasenia', '')
            }
            else if (name === "autogenerar") {
                setAutogenerar(checked)
            }
        }

        let validate = {
            aLowercase: value => /(?=.*[a-z]){1}/.test(value) || 'Debe contener un caracter minúscula',
            aUppercase: value => /(?=.*[A-Z]){1}/.test(value) || 'Debe contener un caracter mayúscula',
            aCharacterSpecial: value => /(?=.*[@#$%^&+=?¿¡!|*\.]){1}/.test(value) || 'Debe contener un caracter especial',
            anNumber: value => /(?=.*[0-9]){1}/.test(value) || 'Debe contener un número'
        }

        return (
            <div className="o-container c-header__wrapper flex flex-column mt-3">
                <form className="w-100" onSubmit={handleSubmit(handleSave)}>
                    <Row>
                        <Col md="4" className="mt-2">
                            <CInput
                                value={codigo}
                                name="codigo"
                                disabled
                                label="Código"
                                placeholder="Autogenerado"
                            />
                        </Col>
                        <Col md="4" className="mt-2">
                            <CInput
                                name="nombre"
                                disabled={allDisabled}
                                {...register("nombre", { required: true })}
                                error={errors.nombre?.type === 'required' && "El campo nombre es requerido"}
                                label="Nombres"
                                requerido="1"
                            />
                        </Col>
                        <Col md="4" className="mt-2">
                            <CInput
                                name="apellido"
                                disabled={allDisabled}
                                {...register("apellido", { required: true })}
                                error={errors.apellido?.type === 'required' && "El campo apellido(s) es requerido"}
                                label="Apellidos"
                                requerido="1"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4" className="mt-2">
                            <CSelect
                                name="idRegion"
                                disabled={allDisabled}
                                {...register("idRegion", { required: true })}
                                options={[...dataRegion.map(el => ({ id: el.id, text: el.nombre }))]}
                                error={errors.idRegion?.type === 'required' && "Seleccione una región"}
                                label="Región"
                                requerido="1"
                            />
                        </Col>
                        <Col md="4" className="mt-2">
                            <CInput
                                name="documento"
                                disabled={allDisabled}
                                {...register("documento", { required: true })}
                                error={errors.documento?.type === 'required' && "El campo documento de identidad es requerido"}
                                label="Documento de Identidad"
                                requerido="1"
                            />
                        </Col>
                        <Col md="4" className="mt-2">
                            <CInput
                                name="telefono"
                                disabled={allDisabled}
                                {...register("telefono", { required: true })}
                                error={errors.telefono?.type === 'required' && "El campo teléfono es requerido"}
                                label="Teléfono"
                                requerido="1"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4" className="mt-2">
                            <CInput
                                name="correo"
                                disabled={allDisabled}
                                {...register("correo", { required: true })}
                                error={errors.correo?.type === 'required' && "El campo correo es requerido"}
                                label="Correo"
                                requerido="1"
                            />
                        </Col>
                        <Col md="4" className="mt-2">
                            <CInput
                                name="contrasenia"
                                {...register("contrasenia", {
                                    required: {
                                        value: cambiarContrasenia == false ? false : true,
                                        message: 'El campo Contraseña es requerido'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Debe contener mínimo 8 caracteres'
                                    },
                                    validate: cambiarContrasenia == false ? '' : validate
                                })}
                                error={errors.contrasenia?.message}
                                type="password"
                                disabled={allDisabled ? true : (inputContrasenia)}
                                label="Contraseña"
                                requerido="1"
                            />
                        </Col>
                        <Col md="4" className="flex align-items-center mb-3" style={{ marginTop: "40px" }}>
                            <label className="c-checkbox me-3">
                                <input
                                    name="autogenerar"
                                    onChange={handleChange}
                                    checked={autogenerar == false ? "" : "checked"}
                                    className=" c-checkbox__input"
                                    type="checkbox"
                                    disabled={allDisabled ? true : (cambiarContrasenia == false ? "disabled" : "")}
                                />
                                <span className="c-checkbox__icon mr-3"></span>
                                <span className="c-input__label u-text--gray-90">Autogenerado</span>
                            </label>
                            {
                                <label id="cambiarContraseniaCheck" className="c-checkbox">
                                    <input
                                        name="cambiarContrasenia"
                                        disabled={allDisabled}
                                        onChange={handleChange}
                                        checked={cambiarContrasenia == false ? "" : "checked"}
                                        className=" c-checkbox__input"
                                        type="checkbox"
                                    />
                                    <span className="c-checkbox__icon mr-3"></span>
                                    <span className="c-input__label u-text--gray-90">Cambiar Contraseña</span>
                                </label>

                            }
                            {/* <label className="c-checkbox">
                                <input className="custom-control-input c-checkbox__input" type="checkbox"></input>
                                <span className="c-checkbox__icon mr-3"></span>
                            </label> */}
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col md="4" className="mt-2">
                            {appContext.permisos.esUsuarioSoloConsultar ?
                                (<CInput
                                    name="rol"
                                    disabled={allDisabled}
                                    {...register("rol", { required: false })}
                                    label="Rol"
                                />)
                                : (
                                    <CSelect
                                        name="idRol"
                                        disabled={allDisabled}
                                        {...register("idRol", { required: true })}
                                        options={[{ id: '', text: 'Seleccione' }, ...dataRol.map(el => ({ id: el.id, text: el.nombre }))]}
                                        label="Rol"
                                        error={errors.idRol?.type === 'required' && "El campo de rol es requerido"}
                                        requerido="1"
                                    />
                                )
                            }
                        </Col>
                        <Col md="4" className="mt-2">
                            <CSelect
                                name="estado"
                                disabled={allDisabled}
                                {...register("estado", { required: true })}
                                options={[...dataEstado.map(el => ({ id: el.id, text: el.nombre }))]}
                                label="Estado"
                                error={errors.estado?.type === 'required' && "Seleccione un Estado"}
                                requerido="1"
                            />
                        </Col>
                    </Row>

                    <Row className="mb-2">
                        <div className="mt-2 flex justify-flex-end gap-4">
                            <a className="c-link" href="/seguridad/usuario/">
                                <CButton type="button">
                                    <Icon children="arrow_back" h="24" className="material-icons-outlined mr-2" />
                                    Volver
                                </CButton>
                            </a>

                            {s_buttonSave &&
                                <CButton
                                    disabled={allDisabled}
                                    type="submit"
                                    children="Guardar"
                                    className="c-button--blue"
                                    isLoading={l_save}>
                                    <Icon children="save" h="24" className="mr-2" />
                                Guardar
                            </CButton>
                            }
                        </div>
                    </Row>
                </form>
            </div>
        )
    }

    Global.ViewLang = 'security/rol-listar';
    Global.View = ViewIntl;
})()
