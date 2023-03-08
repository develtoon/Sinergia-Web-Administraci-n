(function () {
    const { useState, useEffect, Fragment, useContext } = React;
    const { Col, Row, Spinner, Dropdown } = ReactBootstrap
    const { CInput, CSelect, CBreadcrumbs, CButton, Icon, CFlags, CPagination, validateXSS, validateSql, validateCharacters, CPaginationCustom, handleError, AppContext, localSt, CustomToggle } = Global
    const { useForm, Controller } = ReactHookForm;


    let smart = {
        urlContext: '/Seguridad/Usuario',
        urlGetList: '/GetList',
        urlExportXLS: '/ExportXLS',
        urlDelete: '/Delete',
        urlGetCatalogoEstadoGetList: '/Administracion/CatalogoEstado/GetList',
    }

    const ViewIntl = ({ intl }) => {

        const appContext = useContext(AppContext);

        const [estado, setEstado] = useState(0)
        const [rendered, setRendered] = useState(false)
        const [data, setData] = useState([])
        const [dataEstado, setDataEstado] = useState([])
        const [errorData, setErrorData] = useState('')
        const [l_data, setL_data] = useState(false)

        const { register, formState: { errors }, handleSubmit, setValue, watch, clearErrors } = useForm();

        const [pagination, setPagination] = useState({
            text: '',
            total: 0,
            currentPage: 1,
            order: 'fechacreacion desc',
            // totalPages: 0,
            perPage: 10
        })

        useEffect(() => {
            

            let menuPermiso = appContext.menuPermiso("seguridad/usuario")

            axios.all([menuPermiso]).
                then(response => {

                    let listarEstado = catalogoEstadoBuscar(10401)

                    axios.all([listarEstado]).
                        then(response => {

                            appContext.handleBreadcumb(true, [
                                { url: '', name: "Seguridad" },
                                { url: '/seguridad/usuario', name: "Usuarios" }
                            ]);

                            setRendered(true);

                        }).
                        catch(error => {
                            console.log("error")
                        })
                }).
                catch(error => {
                    setRendered(true)
                    console.log("error")
                })

            appContext.handleBreadcumb(true, [
                { url: '', name: "Seguridad" },
                { url: '', name: "Usuarios" }
            ])

        }, [])

        useEffect(() => {
            if (rendered) buscar()
        }, [rendered, pagination.currentPage, pagination.perPage, pagination.order])


        const setOrderDir = (_item) => {

            let o = pagination.order.split(' ')
            if (o[0] === _item) {
                setPagination({ ...pagination, order: `${_item} ${o[1] === 'asc' ? 'desc' : 'asc'}` });
            } else {
                setPagination({ ...pagination, order: _item + ' asc' });
            }
        }

        const getOrderDir = (item) => {
            let o = pagination.order.split(' ')
            return (
                <Icon h="22">
                    {
                        o[0] === item ?
                            o[1] === 'asc' ?
                                'arrow_drop_up'
                                :
                                'arrow_drop_down'
                            :
                            false
                    }
                </Icon>
            )
        }

        const handleChange = (e) => {
            var name = e.target.name;
            var value = e.target.value;

            if (name === "texto") {
                setPagination({ ...pagination, text: value });
            }
            else if (name === "estado") {
                setEstado(value);
            }
        }

        const handleBuscar = (e) => {
            if (pagination.currentPage == 1) {
                buscar()
            }
            else {
                setPagination({ ...pagination, currentPage: 1 })
            }

        }

        const catalogoEstadoBuscar = (codigo) => {
            let params = {
                codigo: codigo
            }
            let listarCatalogoEstado = AXIOS.get(smart.urlGetCatalogoEstadoGetList, { params })
                .then(({ data }) => {
                    if (data.apiEstado == "ok") {
                        setDataEstado(data.data);
                    }
                    else {
                    }
                })
                .catch(() => {
                    setDataEstado([]);
                    console.log('error')
                })

            return listarCatalogoEstado;
        }


        const buscar = () => {
            setL_data(true)
            setErrorData('')

            let params = {
                texto: pagination.text,
                estado: estado,
                ordenamiento: pagination.order,
                pagina: pagination.currentPage,
                tamanio: pagination.perPage
            }

            AXIOS.get(smart.urlContext + smart.urlGetList, { params })
                .then(({ data }) => {
                    if (data.apiEstado == "ok") {
                        setData(data.data)
                        setPagination({ ...pagination, total: data.total })
                        setL_data(false)
                    }
                    else {
                        setData(data.data)
                        setPagination({ ...pagination, total: data.total })
                        setErrorData(data.apiMensaje)
                        setL_data(false)
                    }
                })
                .catch((error) => {

                    let status = error.response.status;

                    if (status == 404) {
                        setErrorData(error.response.data.apiMensaje)
                    }
                    else if (status == 401) {
                        setErrorData(error.response.data.apiMensaje);
                        handleError(error);
                    }

                    setData([]);
                    setL_data(false);
                    setPagination({ ...pagination, total: 0 })
                })

        }

        const handleExportar = (e) => {
            exportar()
        }

        const exportar = () => {
            //setL_data(true)
            //setErrorData('')
            let params = {
                texto: pagination.text,
                estado: estado,
                ordenamiento: pagination.order,
                pagina: pagination.currentPage,
                tamanio: pagination.perPage
            }

            let date = new Date()
            var filename =
                "Usuario_" +
                date.getFullYear() +
                ("0" + (date.getMonth() + 1)).slice(-2) +
                ("0" + date.getDate()).slice(-2) +
                ("0" + date.getHours() + 1).slice(-2) +
                ("0" + date.getMinutes()).slice(-2) +
                ("0" + date.getSeconds()).slice(-2) +
                ".xlsx"

            AXIOS({
                url: smart.urlContext + smart.urlExportXLS, // Interface name
                method: 'get',
                responseType: "blob",
                params: params
            })
                .then(function (response) {
                    const blob = new Blob(
                        [response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' })
                    const aEle = document.createElement('a');     // Create a label
                    const href = window.URL.createObjectURL(blob);       // Create downloaded link
                    aEle.href = href;
                    aEle.download = filename;  // File name after download
                    document.body.appendChild(aEle);
                    aEle.click();     // Click to download
                    document.body.removeChild(aEle); // Download complete remove element
                    window.URL.revokeObjectURL(href) // Release blob object
                })
                .catch((error) => {
                    handleError(error);
                    console.error('Error ocurrido', error);
                })

        }

        const handleDelete = (event, _id) => {
            swal({
                title: "¿Está seguro de eliminar?",
                icon: "warning",
                buttons: true,
                dangerMode: true
            })
                .then((willDelete) => {
                    if (willDelete) {
                        AXIOS.delete(`${smart.urlContext}${smart.urlDelete}?id=${_id}`)
                            .then(({ data: res }) => {
                                if (res.apiEstado === 'ok') {
                                    swal({
                                        title: res.apiMensaje,
                                        icon: "success",
                                    });
                                    buscar();
                                }
                                else {
                                    swal({
                                        title: res.apiMensaje,
                                        icon: "error",
                                    });
                                }
                            })
                            .catch((error) => {
                                handleError(error);
                            })
                    }
                });
        }

        const handleOnPageChange = (page) => {
            setPagination({ ...pagination, currentPage: page })
        }

        const handleOnSizeChange = (size) => {
            if (pagination.currentPage == 1) {
                setPagination({ ...pagination, perPage: size })
            }
            else {
                setPagination({ ...pagination, perPage: size, currentPage: 1 })
            }
        }

        

        return (
            <div className="o-container c-header__wrapper flex-column mt-4" style={{ height: 'auto', marginBottom: '80px' }}>
                <div className="row w-100 justify-space-between">
                    <form onSubmit={handleSubmit(handleBuscar)} className ="col-lg-8 d-md-flex gap-2 mb-3 p-0">
                        <CInput
                            name="texto"
                            {...register("texto", {
                                validate: {
                                    valXSS: value => validateXSS(value) || 'Búsqueda inválida',
                                    valSql: value => validateSql(value) || 'Búsqueda inválida',
                                    valCha: value => validateCharacters(value) || 'Búsqueda inválida'
                                }
                            })}
                            error={errors.texto?.message}
                            mod="c-input--search col-md-5 mb-3"
                            icon="search"
                            placeholder="Ingrese texto a buscar"
                            onChange={e => handleChange(e)}
                        />
                        <CSelect name="estado" placeholder="Estado"
                            options={[{ id: '', text: 'Todos (Estado)' }, ...dataEstado.map(it => ({ id: it.id, text: it.nombre }))]}
                            onChange={handleChange} mod="col-md-3 mb-3" />
                        {appContext.permisos.esUsuarioConsultar && <CButton type="submit" isLoading={l_data}>
                            <Icon h="24" className="mr-2" children="search" />
                            Buscar
                        </CButton>}
                    </form>
                    <div className="d-flex justify-content-end col-lg-4 gap-2 p-0">
                        {appContext.permisos.esUsuarioExportar && <CButton type='button' className="c-button--green" onClick={handleExportar}>
                            <Icon h="24" className="mr-2" children="download" />
                            Exportar
                        </CButton>}
                        {appContext.permisos.esUsuarioCrear && <a className="c-link" href="/seguridad/usuario/create">
                            <CButton className="c-button--blue" type='button'>
                                <Icon h="24" className="mr-2" children="add_circle" />
                                Crear
                            </CButton>
                        </a>}
                    </div>
                </div>


                <div className="c-table">

                    <div className="c-table__container mt-2">
                        <table className="c-table__container--content mb-2">
                            <thead>
                                <tr>
                                    <th scope="c-table__options">
                                    </th>
                                    <th scope="col">
                                        <div className="text-center flex align-center justify-center" onClick={() => { setOrderDir('codigo')}}>
                                            Código
                                            {getOrderDir('codigo')}
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="text-left flex align-center" onClick={() => { setOrderDir('usuario')}}>
                                            Usuario
                                            {getOrderDir('usuario')}
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="text-left flex align-center" onClick={() => { setOrderDir('nombre')}}>
                                            Nombres
                                            {getOrderDir('nombre')}
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="text-left flex align-center" onClick={() => { setOrderDir('apellido')}}>
                                            Apellidos
                                            {getOrderDir('apellido')}
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="text-left flex align-center" onClick={() => { setOrderDir('documento')}}>
                                            DOI
                                            {getOrderDir('documento')}
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="text-left flex align-center" onClick={() => { setOrderDir('telefono')}}>
                                            Teléfono
                                            {getOrderDir('telefono')}
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="text-left flex align-center" onClick={() => { setOrderDir('rol')}}>
                                            Rol
                                            {getOrderDir('rol')}
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="text-center flex align-center justify-center" onClick={() => { setOrderDir('fechacreacion')}}>
                                            Fecha Creación
                                            {getOrderDir('fechacreacion')}
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="text-left flex align-center" onClick={() => { setOrderDir('usuariocreacion') }}>
                                            Usuario Creación
                                            {getOrderDir('usuariocreacion')}
                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="text-center flex align-center justify-center" onClick={() => { setOrderDir('estado')}}>
                                            Estado
                                            {getOrderDir('estado')}
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    l_data ?
                                        <tr>
                                            <td colSpan="6">
                                                Cargando..
                                            </td>
                                        </tr>
                                        :
                                        errorData ?
                                            <tr>
                                                <td colSpan="6">{errorData}</td>
                                            </tr>
                                            :
                                            data.map((item) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td className="c-table__options text-center">
                                                            <Dropdown>
                                                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href={`/Seguridad/Usuario/Edit/${item.id}`} eventKey="1">{appContext.permisos.esUsuarioEditar ? ("Editar") : ("Ver")}</Dropdown.Item>
                                                                    {appContext.permisos.esUsuarioEliminar && <Dropdown.Item onClick={(ev) => handleDelete(ev, item.id)} eventKey="2">Eliminar</Dropdown.Item>}
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                        <td className="text-center u-text--bold">{item.codigo}</td>
                                                        <td className="text-left u-text--regular">{item.usuario}</td>
                                                        <td className="text-left u-text--regular">{item.nombre}</td>
                                                        <td className="text-left u-text--regular">{item.apellido}</td>
                                                        <td className="text-left u-text--regular">{item.documento}</td>
                                                        <td className="text-left u-text--regular">{item.telefono}</td>
                                                        <td className="text-left u-text--regular">{item.rol}</td>
                                                        <td className="text-center u-text--regular">{item.fechacreacion}</td>
                                                        <td className="text-left u-text--regular">{item.usuariocreacion}</td>
                                                        <td className="text-center u-text--bold"><div className={`c-card--estado c-card--estado-${item.estado == 'Activo' ? 'active' : 'inactive'}`}>{item.estado}</div></td>
                                                    </tr>
                                                )
                                            })
                                }
                            </tbody>
                        </table>
                    </div>

                    <CPaginationCustom
                        totalCount={pagination.total}
                        currentPage={pagination.currentPage}
                        pageSize={pagination.perPage}
                        onPageChange={handleOnPageChange}
                        onSizeChange={handleOnSizeChange}
                    />

                </div>
            </div>
        )
    }
    Global.View = ViewIntl;
})()
