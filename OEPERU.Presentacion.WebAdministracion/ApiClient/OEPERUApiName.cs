using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OEPERU.Presentacion.WebAdministracion.ApiClient
{
    public class OEPERUApiName
    {
        
        public const string Cuenta = "v1/cuentas";
        public const string Usuario = "v1/usuarios";
        public const string Login = "v1/login/administracion";
        public const string LoginToken = "v1/login/administracion/token";
        public const string Rol = "v1/roles";
        public const string Menu = "v1/menus";
        public const string Catalogo = "v1/catalogos";
        public const string CatalogoEstado = "v1/catalogoestados";
        public const string TiposBienes = "/v1/tiposbienes";
        public const string SubTiposBienes = "/v1/tiposbienes/subtiposbienes";
        public const string CategoriasSubTiposBienes = "/v1/tiposbienes/categoriassubtiposbienes";
        public const string SubTiposBienesAtributo = "/v1/tiposbienes/atributo";

        public const string Ubigueos = "/v1/ubigeos";
        public const string Bienes = "/v1/bienes";
        public const string BienesArchivo = "/v1/bienes/archivo";
        public const string BienesArchivoDownload = "/v1/bienes/archivodownload";
        public const string ConsultaBienes = "/v1/consultabienes";

        public const string ApiGetBusqueda = "{0}?texto={1}&ordenamiento={2}&pagina={3}";
        public const string ApiGetBusquedaTamanio = "{0}?texto={1}&ordenamiento={2}&pagina={3}&tamanio={4}";
        public const string ApiCambiarContraseniaCorreo = "v1/cambiarcontrasenia/correo";
        public const string ApiCambiarContrasenia = "v1/cambiarcontrasenia";
        public const string ApiDelete = "{0}/{1}";
        public const string ApiEstado = "apiEstado";
        public const string ApiMensaje = "apiMensaje";

        public const string Id = "id";
        public const string Codigo = "codigo";
        public const string urlArchivo = "urlArchivo";
        public const string urlArchivoMiniatura = "urlArchivoMiniatura";
        public const string Total = "total";
        public const string Data = "data";
        public const string Ok = "ok";
        public const string StatusCode = "StatusCode";
        public const string Error = "error";
        public const string Token = "token";
    }
}
