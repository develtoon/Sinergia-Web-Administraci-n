using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OEPERU.Presentacion.WebAdministracion.Areas.Seguridad.Models
{
    public class UsuarioInput
    {
        public string id { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public int idRegion { get; set; }
        public string documento { get; set; }
        public string telefono { get; set; }
        public string correo { get; set; }
        public string contrasenia { get; set; }
        public bool cambiarContrasenia { get; set; }
        public string idRol { get; set; }
        public int estado { get; set; }
        public UsuarioInput()
        {
            this.id = string.Empty;
            this.nombre = String.Empty;
            this.apellido = String.Empty;
            this.idRegion = 0;
            this.documento = String.Empty;
            this.telefono = String.Empty;
            this.correo = String.Empty;
            this.contrasenia = String.Empty;
            this.cambiarContrasenia = false;
            this.idRol = String.Empty;
            this.estado = 0;
        }
    }
}
