using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OEPERU.Presentacion.WebAdministracion.Models
{
    public class CorreoInput
    {
        public string correo { get; set; }

        public CorreoInput()
        {
            correo = string.Empty;
        }
    }
}
