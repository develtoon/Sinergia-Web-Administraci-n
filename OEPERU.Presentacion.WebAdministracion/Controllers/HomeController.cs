using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OEPERU.Presentacion.WebAdministracion.ApiClient;
using OEPERU.Presentacion.WebAdministracion.Extensions;
using OEPERU.Presentacion.WebAdministracion.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OEPERU.Presentacion.WebAdministracion.Controllers
{
    public class HomeController : Controller
    {
        private readonly OEPERUApiClient _oeperuClient;
        private readonly IHttpContextAccessor _accessor;

        public HomeController(OEPERUApiClient oeperuClient, IHttpContextAccessor accessor)
        {
            _oeperuClient = oeperuClient;
            _accessor = accessor;
        }

        [AuthorizationFilter]
        public IActionResult Index()
        {
            ViewBag.Title = "Index";
            return View();
        }
        public IActionResult Create()
        {
            return View();
        }
        //[AuthorizationFilter]
        public IActionResult Demo()
        {
            return View();
        }

        //[AuthorizationFilter]
        public IActionResult Color()
        {
            return View();
        }


        public async Task<ActionResult> LogOutAsync()
        {
            HttpContext.Session.Remove(SessionName.SessionKeyPersona);
            HttpContext.Session.Remove(SessionName.SessionKeyAcceso);
            HttpContext.Session.Remove(SessionName.SessionKeyReCaptcha);
            return RedirectToAction("", "Login");
        }

    }
}
