using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OEPERU.Presentacion.WebAdministracion.Areas.EstudioMercado.Models
{
    public class BienAtributoInput
    {
        public string id { get; set; }
        public string valor { get; set; }

        public BienAtributoInput()
        {
            this.id = string.Empty;
            this.valor = string.Empty;
        }

    }
}
