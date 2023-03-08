(function () {
    const { useState, useEffect, Fragment, useContext } = React;
    const { Col, Row, Spinner } = ReactBootstrap
    const { CInput, CSelect, CBreadcrumbs, CButton, Icon, CFlags, CPagination, handleError, AppContext, localSt, generateId } = Global
    const { useForm, Controller } = ReactHookForm;

    let smart = {
        urlContext: '/Administracion/Catalogo',
        urlSave: '/Save',
        urlGetSingle: '/GetSingle',
        urlCatalogoEstadoGetList: '/Administracion/CatalogoEstado/GetList',
    }

    const ViewIntl = ({ intl }) => {

        const appContext = useContext(AppContext);

        const [allDisabled, setAllDisabled] = useState(false)

        const [renderedCatalogoDetalle, setRenderedCatalogoDetalle] = useState(false)
        const [l_save, setL_save] = useState(false)
        const [rendered, setRendered] = useState(false)
        //creación de manejadores
        const [dataEstado, setDataEstado] = useState([])
        const [dataEstadoDetalle, setDataEstadoDetalle] = useState([])
        const [dataTipo, setDataTipo] = useState([])

        const [l_dataCatalogoDetalle, setL_DataCatalogoDetalle] = useState(false)
        const [dataCatalogoDetalle, setDataCatalogoDetalle] = useState([])
        const [permiso, setPermiso] = useState(false)

        //registro de formulario
        const { register, formState: { errors }, handleSubmit, setValue, control, watch } = useForm();

        useEffect(() => {

            appContext.handleBreadcumb(true, [
                { url: '', name: "Administración" },
                { url: '/Administracion/Catalogo/', name: "Catálogo" },
                { url: '', name: "Crear" },
            ]);


            let menuPermiso = appContext.menuPermiso("administracion/catalogo");

            axios.all([menuPermiso]).
                then(response => {
                    setRendered(true)
                }).
                catch(error => {
                    setRendered(true)
                    console.log("error");
                });

        }, [])

        useEffect(() => {

            if (rendered) {
                var listarEstado = buscarCatalogoEstado(12000, 1);
                var listarDetalleTipo = buscarCatalogoEstado(12002, 2);
                var listarDetalleEstado = buscarCatalogoEstado(12001, 3);

                ID = document.querySelector('#id').value;

                axios.all([listarEstado, listarDetalleTipo, listarDetalleEstado]).
                    then(response => {

                        if (ID) {
                            setPermiso(appContext.permisos.esUsuarioEditar)
                            appContext.handleBreadcumb(true, [
                                { url: '', name: "Administración" },
                                { url: '/administracion/catalogo/', name: "Catálogo" },
                                { url: '', name: "Editar" },
                            ]);

                            getSingle();
                        }
                        else {
                            setPermiso(appContext.permisos.esUsuarioCrear)
                            appContext.handleBreadcumb(true, [
                                { url: '', name: "Administración" },
                                { url: '/administracion/catalogo/', name: "Catálogo" },
                                { url: '', name: "Crear" },
                            ]);

                        }
                    }).
                    catch(error => {
                        console.log("error");
                    });
            }

        }, [rendered])

        useEffect(async () => {
            if (renderedCatalogoDetalle) {
                dataCatalogoDetalle.forEach((item) => {
                    setValue(`nombre${item.key}`, item.nombre)
                    setValue(`tipoSelected${item.key}`, item.idTipo)
                    setValue(`valor${item.key}`, item.valor)
                    setValue(`estadoSelected${item.key}`, item.idEstado)
                })
            }
        }, [renderedCatalogoDetalle])


        const handleSave = (data) => {

            if (l_save) return
            setL_save(true)

            let detalles = new Array();

            dataCatalogoDetalle
                .forEach(dcd => {
                    let objDetalle = {
                        "id": dcd.id,
                        "nombre": dcd.nombre,
                        "idTipo": dcd.idTipo,
                        "valor": dcd.valor,
                        "idEstado": dcd.idEstado
                    }

                    detalles.push(objDetalle);
                });

            let oCatalogo = {
                "id": ID,
                "nombre": data.nombre,
                "estado": data.estado,
                "detalles": detalles
            }

            AXIOS.post(smart.urlContext + smart.urlSave, oCatalogo)
                .then(({ data }) => {
                    if (data.apiEstado === 'ok') {
                        swal({
                            title: data.apiMensaje,
                            // text: data.apiMensaje,
                            icon: "success",
                        })

                        appContext.handleBreadcumb(true, [
                            { url: '', name: "Administración" },
                            { url: '/administracion/catalogo/', name: "Catálogo" },
                            { url: '', name: "Editar" },
                        ]);

                        if (!ID) {
                            //setCodigo(data.codigo)
                            ID = data.id
                        }
                    } else {
                        swal({
                            title: data.apiMensaje,
                            // text: data.apiMensaje,
                            icon: "error",
                        })
                    }
                    setL_save(false)
                })
                .catch(error => {
                    swal({ title: "Error", text: "Comuníquese con soporte técnico", icon: "error" });
                })
        }

        /* Métodos Sección Tipos de Producto */

        const handleAddDetalle = (e) => {

            e.preventDefault()

            let objCatalogoDetalle = {
                key: generateId(),
                id: "",
                nombre: "",
                idTipo: 0,
                valor: "",
                idEstado: 0
            }

            let clone = [...dataCatalogoDetalle]
            clone.push(objCatalogoDetalle)
            setDataCatalogoDetalle(clone)
        }

        const handleChangeCatalogoDetalle = (e, _key) => {
            e.preventDefault()
            let name = e.target.name;
            let value = e.target.value;

            let newArrayCatalogoDetalle = [...dataCatalogoDetalle]

            let pos = newArrayCatalogoDetalle.findIndex((item) => item.key === _key);

            if (name == `tipoSelected${_key}`) {
                newArrayCatalogoDetalle[pos].idTipo = Number(value);
            }
            else if (name == `estadoSelected${_key}`) {
                newArrayCatalogoDetalle[pos].idEstado = Number(value);
            }
            else if (name == `nombre${_key}`) {
                newArrayCatalogoDetalle[pos].nombre = value;
            }

            setDataCatalogoDetalle(newArrayCatalogoDetalle)


        }

        const handleDeleteTipoProducto = (event, _key) => {
            let clone = [...dataCatalogoDetalle]
            let pos = clone.findIndex(item => item.key == _key)
            clone.splice(pos, 1)

            setDataCatalogoDetalle(clone)
        }

        /*Fin Métodos Sección Tipos de Producto */


        const buscarCatalogoEstado = (codigo, tipo) => {
            let params = {
                codigo: codigo
            }
            var listarCatalogoEstado = AXIOS.get(smart.urlCatalogoEstadoGetList, { params })
                .then(({ data }) => {
                    if (data.apiEstado == "ok") {

                        /*tipo:
                        1 Estados
                        2 Estados Detalle
                        2 Tipo Valor
                        */
                        if (tipo == 1) {
                            setDataEstado(data.data);
                        }
                        else if (tipo == 2) {
                            setDataEstadoDetalle(data.data);
                        }
                        else if (tipo == 3) {
                            setDataTipo(data.data);
                        }
                    }
                    else {
                    }
                })
                .catch((error) => {

                    if (tipo == 1) {
                        setDataEstado([]);
                    }
                    else if (tipo == 2) {
                        setDataEstadoDetalle([]);
                    }
                    else if (tipo == 3) {
                        setDataTipo([]);
                    }

                    let status = error.response.status;

                    if (status == 401) {
                        handleError(error);
                        setAllDisabled(true);
                    }
                })

            return listarCatalogoEstado;
        }


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

                        setValue('nombre', resSingle.nombre)
                        setValue('estado', resSingle.idEstado)

                        let resSingleDataDetalle = resSingle.detalles.map(item => {
                            return { ...item, key: generateId() }
                        })

                        setDataCatalogoDetalle(resSingleDataDetalle)
                        setRenderedCatalogoDetalle(true);

                    }
                })
                .catch(error => {
                    setAllDisabled(true);
                    handleError(error);
                })

        };

        return (
            <div className="o-container c-header__wrapper flex flex-column mt-3">
                <form className="w-100" onSubmit={handleSubmit(handleSave)}>
                    <Row>
                        <Col md="4" className="mt-2">
                            <CInput
                                disabled
                                name="nombre"
                                {...register("nombre", { required: true })}
                                label="Nombre"
                                error={errors.codigo?.type === 'required' && "El campo nombre es requerido"}
                            />
                        </Col>
                        {/* <Col md="3" className="mt-2">
                            <CSelect
                                name="estado"
                                {...register("estado", { required: true })}
                                label="Estado"
                                requerido="1"
                                error={errors.estado?.type === 'required' && "El campo estado es requerido"}
                                options={[{ id: '', text: 'Seleccione' }, ...dataEstado.map(el => ({ id: el.id, text: el.nombre }))]}
                            />
                        </Col> */}
                    </Row>
                    <div className="d-flex justify-content-between mb-3 mt-3">
                        <h5 className="u-text--bold u-text--gray-90 flex align-center">Detalle</h5>
                        {!appContext.permisos.esUsuarioSoloConsultar && <CButton type="button" onClick={(e) => handleAddDetalle(e)}>
                            <Icon children="add_circle" h="24" className="material-icons-outlined mr-2" />
                                Agregar
                            </CButton>}
                    </div>
                    <hr className="u-text--gray-60 mb-3" />

                    <div className="c-table">
                        <div className="c-table__container mt-2">
                            <table className="c-table__container--content mb-2">
                                <thead>
                                    <tr>
                                        <th scope="c-table__options text-center">
                                        </th>
                                        <th scope="col">
                                            <div className="flex justify-center">
                                                N°
                                        </div>
                                        </th>
                                        <th scope="col">
                                            <div className="flex justify-left">
                                                Nombre
                                        </div>
                                        </th>
                                        <th scope="col">
                                            <div className="flex justify-left">
                                                Tipo
                                        </div>
                                        </th>
                                        <th scope="col">
                                            <div className="flex justify-left">
                                                Valor
                                        </div>
                                        </th>
                                        <th scope="col">
                                            <div className="flex justify-center">
                                                Estado
                                        </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        l_dataCatalogoDetalle ?
                                            <tr>
                                                <td colSpan="6">Cargando...</td>
                                            </tr> :
                                            dataCatalogoDetalle.map((item, index) => {
                                                return (<tr key={item.key}>
                                                    <td className="c-table__options text-center">
                                                        {!appContext.permisos.esUsuarioSoloConsultar &&
                                                            <button type="button" className="c-button--minimal u-text--red" onClick={(ev) => handleDeleteTipoProducto(ev, item.key)}>
                                                                <Icon h="26">delete_outline</Icon>
                                                            </button>}
                                                    </td>
                                                    <td className="text-center c-table--v-center">{Number(index) + 1}</td>
                                                    <td className="text-left">
                                                        <CInput
                                                            disabled={allDisabled}
                                                            name={`nombre${item.key}`}
                                                            {...register(`nombre${item.key}`, { required: true })}
                                                            error={errors[`nombre${item.key}`]?.type === 'required' && "El campo es requerido"}
                                                            onChange={(e) => handleChangeCatalogoDetalle(e, item.key)}
                                                            placeholder=""
                                                        />
                                                    </td>
                                                    <td className="text-left">
                                                        {appContext.permisos.esUsuarioSoloConsultar ?
                                                            (<CInput
                                                                disabled={allDisabled}
                                                                value={item.tipo}
                                                                placeholder=""
                                                            />) :
                                                            (<CSelect
                                                                disabled={allDisabled}
                                                                name={`tipoSelected${item.key}`}
                                                                options={[{ id: '', text: 'Seleccione' }, ...dataTipo.map(el => ({ id: el.id, text: el.nombre }))]}
                                                                {...register(`tipoSelected${item.key}`, { required: true })}
                                                                error={errors[`tipoSelected${item.key}`]?.type === 'required' && "El campo es requerido"}
                                                                onChange={(e) => handleChangeCatalogoDetalle(e, item.key)}
                                                                placeholder="data"
                                                            />)}
                                                    </td>
                                                    <td className="text-left">
                                                        <CInput
                                                            disabled={allDisabled}
                                                            name={`valor${item.key}`}
                                                            {...register(`valor${item.key}`, { required: false })}
                                                            error={errors[`valor${item.key}`]?.type === 'required' && "El campo es requerido"}
                                                            onChange={(e) => handleChangeCatalogoDetalle(e, item.key)}
                                                            placeholder=""
                                                        />
                                                    </td>
                                                    <td className="text-left">
                                                        {appContext.permisos.esUsuarioSoloConsultar ?
                                                            (<CInput
                                                                disabled={allDisabled}
                                                                value={item.estado}
                                                                placeholder=""
                                                            />) :
                                                            (<CSelect
                                                                disabled={allDisabled}
                                                                name={`estadoSelected${item.key}`}
                                                                options={[{ id: '', text: 'Seleccione' }, ...dataEstadoDetalle.map(el => ({ id: el.id, text: el.nombre }))]}
                                                                {...register(`estadoSelected${item.key}`, { required: true })}
                                                                error={errors[`estadoSelected${item.key}`]?.type === 'required' && "El campo es requerido"}
                                                                onChange={(e) => handleChangeCatalogoDetalle(e, item.key)}
                                                                placeholder="data"
                                                            />)}
                                                      
                                                    </td>
                                                </tr>)
                                            })
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <Row className="mb-2">
                        <div className="mt-2 flex justify-flex-end gap-4">
                            <a className="c-link" href="/administracion/catalogo/">
                                <CButton type="button">
                                    <Icon children="arrow_back" h="24" className="material-icons-outlined mr-2" />
                                    Volver
                                </CButton>
                            </a>

                            {permiso &&
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
