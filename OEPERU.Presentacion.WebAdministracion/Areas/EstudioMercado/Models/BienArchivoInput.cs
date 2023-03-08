using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OEPERU.Presentacion.WebAdministracion.Areas.EstudioMercado.Models
{
    public class BienArchivoInput
    {
        public string id { get; set; }
        public string idArchivo { get; set; }
        public string descripcion { get; set; }

        public BienArchivoInput()
        {
            this.id = string.Empty;
            this.idArchivo = string.Empty;
            this.descripcion = string.Empty;
        }
    }
}
