using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OEPERU.Presentacion.WebAdministracion.Areas.Administracion.Models
{
    public class CatalogoInput
    {
        public string id { get; set; }
        public string nombre { get; set; }
        public int estado { get; set; }
        public IList<CatalogoDetalleInput> detalles { get; set; }
        public CatalogoInput()
        {
            this.id = string.Empty;
            this.nombre = String.Empty;
            this.estado = 0;
            this.detalles = new List<CatalogoDetalleInput>();
        }
    }
}
