using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using OEPERU.Presentacion.WebAdministracion.Extensions;
using OEPERU.Presentacion.WebAdministracion.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OEPERU.Presentacion.WebAdministracion.Filters
{
    public class AuthorizationApiFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (filterContext.HttpContext.Session == null ||
                      !filterContext.HttpContext.Session.TryGetValue(SessionName.SessionKeyPersona, out byte[] val))
            {
                filterContext.Result =
                      new JsonResult(new CheckStatusOutput(Variables.Error, "Su sesión ha expirado, por favor vuelva a logearse.")) { StatusCode = 401 };

            }

            base.OnActionExecuting(filterContext);
        }
    }
}
