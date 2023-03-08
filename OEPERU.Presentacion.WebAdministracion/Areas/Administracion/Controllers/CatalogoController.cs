using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OEPERU.Presentacion.WebAdministracion.ApiClient;
using OEPERU.Presentacion.WebAdministracion.Areas.Administracion.Models;
using OEPERU.Presentacion.WebAdministracion.Filters;
using OEPERU.Presentacion.WebAdministracion.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace OEPERU.Presentacion.WebAdministracion.Areas.Administracion.Controllers
{
    [Area("Administracion")]
    public class CatalogoController : Controller
    {
        private readonly OEPERUApiClient _oeperuClient;
        private readonly IHttpContextAccessor _accessor;
        string urlApiAdministracion = "";

        public CatalogoController(OEPERUApiClient oeperuClient, IHttpContextAccessor accessor)
        {
            _oeperuClient = oeperuClient;
            _accessor = accessor;
            urlApiAdministracion = _oeperuClient.getApiAdministracion();
        }

        [ValidateAntiForgeryToken]
        [AuthorizationApiFilter]
        public async Task<JsonResult> GetList(string texto, string ordenamiento = "", int pagina = 1, int estado = 0, int tamanio = 0)
        {
            Dictionary<string, object> query = await GetSearch(texto, estado, ordenamiento, pagina, tamanio);

            var status = int.Parse(query[OEPERUApiName.StatusCode].ToString());
            query.Remove(OEPERUApiName.StatusCode);

            return new JsonResult(query) { StatusCode = status };
        }

        private async Task<Dictionary<string, object>> GetSearch(
            string texto = "", int estado = 0, string ordenamiento = "", int pagina = 1, int tamanio = 0)
        {
            string url = "";
            url = string.Format("{0}?estado={1}&texto={2}&pagina={3}&ordenamiento={4}&tamanio={5}", OEPERUApiName.Catalogo,
                estado, texto, pagina, ordenamiento, tamanio);

            Dictionary<string, object> response = await _oeperuClient.GetAsync(url, HttpContext, urlApiAdministracion);
            return response;
        }

        [HttpGet]
        [ValidateAntiForgeryToken]
        [AuthorizationApiFilter]
        public async Task<FileResult> ExportXLS(
            string texto = "", int estado = 0, string ordenamiento = "", int pagina = 1, int tamanio = 0)
        {
            string url = "";
            url = string.Format("{0}/exportar?estado={1}&texto={2}&pagina={3}&ordenamiento={4}&tamanio={5}", OEPERUApiName.Catalogo,
                estado, texto, pagina, ordenamiento, tamanio);


            var response = await _oeperuClient.GetFileAsync(url, HttpContext, urlApiAdministracion);

            using (Stream responseStream = response.stream)
            using (MemoryStream memoryStream = new MemoryStream())
            {
                byte[] buffer = new byte[1024];
                int bytesRead;
                do
                {
                    bytesRead = responseStream.Read(buffer, 0, buffer.Length);
                    memoryStream.Write(buffer, 0, bytesRead);
                } while (bytesRead > 0);

                var filename = $"Catálogo_{new DateTime().ToString("yyyyMMdd_HHmmss")}.xlsx";
                var cd = new System.Net.Mime.ContentDisposition
                {
                    FileName = filename,
                    Inline = true,
                };

                string fileName = filename;
                string fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                Response.StatusCode = response.statusCode;
                Response.Headers.Add("Content-Disposition", cd.ToString());
                return File(memoryStream.ToArray(), fileType, fileName);
            }
        }

        [HttpGet]
        [ValidateAntiForgeryToken]
        [AuthorizationApiFilter]
        public async Task<JsonResult> GetSingle(string id)
        {
            string url = string.Format("{0}/{1}", OEPERUApiName.Catalogo, id);
            Dictionary<string, object> response = await _oeperuClient.GetAsync(url, HttpContext, urlApiAdministracion);

            var status = int.Parse(response[OEPERUApiName.StatusCode].ToString());
            response.Remove(OEPERUApiName.StatusCode);

            return new JsonResult(response) { StatusCode = status };
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        [AuthorizationApiFilter]
        public async Task<JsonResult> Save([FromBody] CatalogoInput input)
        {
            CheckStatusOutput checkStatus = new CheckStatusOutput();
            var status = 0;

            if (ModelState.IsValid)
            {
                string url = "";
                url = OEPERUApiName.Catalogo;
                Dictionary<string, object> response = null;

                if (string.IsNullOrEmpty(input.id))
                {
                    response = await _oeperuClient.PostAsync(url,
                        new
                        {
                            id = string.Empty,
                            input.nombre,
                            input.estado,
                            input.detalles
                        }, HttpContext, urlApiAdministracion);
                }
                else
                {
                    url = string.Format("{0}/{1}", url, input.id);
                    response = await _oeperuClient.PutAsync(url, new
                    {
                        input.id,
                        input.nombre,
                        input.estado,
                        input.detalles
                    }
                    , HttpContext, urlApiAdministracion);
                }

                if (response != null)
                {

                    if (response[OEPERUApiName.ApiEstado].Equals(OEPERUApiName.Ok))
                    {
                        checkStatus = new CheckStatusOutput(response);
                    }
                    else
                    {
                        checkStatus = new CheckStatusOutput(response[OEPERUApiName.ApiEstado].ToString(),
                            response[OEPERUApiName.ApiMensaje].ToString());
                    }

                    status = int.Parse(response[OEPERUApiName.StatusCode].ToString());
                    response.Remove(OEPERUApiName.StatusCode);
                }
            }
            else
            {
                status = (int)HttpStatusCode.InternalServerError;
            }

            return new JsonResult(checkStatus) { StatusCode = status };

        }


        [HttpDelete]
        [ValidateAntiForgeryToken]
        [AuthorizationApiFilter]
        public async Task<JsonResult> Delete(string id)
        {
            CheckStatusOutput checkStatus = new CheckStatusOutput();
            var status = 0;
            string url = "";
            url = string.Format(OEPERUApiName.ApiDelete,
                OEPERUApiName.Catalogo, id);

            Dictionary<string, object> response = await _oeperuClient.DeleteAsync(url, HttpContext, urlApiAdministracion);

            if (response != null)
            {
                if (response[OEPERUApiName.ApiEstado].Equals(OEPERUApiName.Ok))
                {
                    checkStatus = new CheckStatusOutput(response);
                }
                else
                {
                    checkStatus = new CheckStatusOutput(response[OEPERUApiName.ApiEstado].ToString(),
                        response[OEPERUApiName.ApiMensaje].ToString());
                }

                status = int.Parse(response[OEPERUApiName.StatusCode].ToString());
                response.Remove(OEPERUApiName.StatusCode);
            }
            else
            {
                status = (int)HttpStatusCode.InternalServerError;
            }

            return new JsonResult(checkStatus) { StatusCode = status };
        }

        [AuthorizationFilter]
        public IActionResult Index()
        {
            ViewBag.Title = "Index";
            return View();
        }

        [AuthorizationFilter]
        public IActionResult Create()
        {
            return View();
        }

        [AuthorizationFilter]
        public IActionResult Edit(string id)
        {
            ViewBag.Id = id;
            return View("Create");
        }
    }
}
