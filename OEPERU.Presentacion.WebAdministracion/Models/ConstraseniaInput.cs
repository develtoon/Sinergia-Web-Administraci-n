using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OEPERU.Presentacion.WebAdministracion.Models
{
    public class ContraseniaInput
    {
        public string contenido { get; set; }
        public string contrasenia { get; set; }

        public string repetircontrasenia { get; set; }

        public ContraseniaInput()
        {
            contenido = string.Empty;
            contrasenia = string.Empty;
            repetircontrasenia = string.Empty;
        }
    }
}
