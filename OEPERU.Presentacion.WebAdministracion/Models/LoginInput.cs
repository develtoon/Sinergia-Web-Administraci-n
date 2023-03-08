using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OEPERU.Presentacion.WebAdministracion.Models
{
    public class LoginInput
    {
        public string correo { get; set; }
        public string contrasenia { get; set; }
        public LoginInput()
        {
            correo = string.Empty;
            contrasenia = string.Empty;
        }
    }
}
