using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OEPERU.Presentacion.WebAdministracion.Areas.Seguridad.Models
{
    public class RolInput
    {
        public string id { get; set; }
        public string nombre { get; set; }
        public int estado { get; set; }
        public int idTipoRol { get; set; }
        public IList<RolMenuInput> menus { get; set; }
        public RolInput()
        {
            this.id = string.Empty;
            this.nombre = String.Empty;
            this.estado = 0;
            this.idTipoRol = 0;
            this.menus = new List<RolMenuInput>();
        }
    }
}
