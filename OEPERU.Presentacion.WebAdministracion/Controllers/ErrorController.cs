using Microsoft.AspNetCore.Mvc;
using OEPERU.Presentacion.WebAdministracion.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OEPERU.Presentacion.WebAdministracion.Controllers
{
    public class ErrorController : Controller
    {
        public IActionResult NoAutorizado()
        {
            ViewBag.Title = "No Autorizado";
            return View();
        }
    }
}
