using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OEPERU.Presentacion.WebAdministracion.Areas.Administracion.Models
{
    public class CatalogoDetalleInput
    {
        public string id { get; set; }
        public string nombre { get; set; }
        public int idTipo { get; set; }
        public string valor { get; set; }
        public int idEstado { get; set; }

        public CatalogoDetalleInput()
        {
            this.id = string.Empty;
            this.nombre = string.Empty;
            this.idTipo = 0;
            this.valor = string.Empty;
            this.idEstado = 0;
        }
    }
}
