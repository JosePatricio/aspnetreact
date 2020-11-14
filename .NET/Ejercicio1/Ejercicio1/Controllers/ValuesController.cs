
using System.Collections.Generic;
using System.Web.Mvc;
using System.Web.Http;
using Negocio;



namespace Ejercicio1.Controllers
{
    public class ValuesController : ApiController
    {

        // GET api/values
        //  [EnableCors(origins: "*", headers: "*", methods: "*")]
        //  [System.Web.Http.HttpGet]
        public JsonResult Get(string filterCriteria = "Contains", string filter = "", string sortColumnName = "nombre", string sortOrder = "asc", int pageSize = 5, int currentPage = 1)
        {
            bookBo bo = new bookBo();
            List<tb_libro> List = new List<tb_libro>();
            int totalPage = 0;
            List = bo.getLibrosList(filterCriteria, filter, sortColumnName, sortOrder, pageSize, currentPage, out totalPage);

            return new JsonResult
            {
                Data = new { List = List, totalPage = totalPage, sortColumnName = sortColumnName, sortOrder = sortOrder, currentPage = currentPage },
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };
        }

      //  [EnableCors(origins: "*", headers: "*", methods: "*")]
        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("api/getall")]
        public ResponseModel GetAll(string filterCriteria = "Contains", string filter = "", string sortColumnName = "nombre", string sortOrder = "asc", int pageSize = 5, int currentPage = 1)
        {
            bookBo bo = new bookBo();
            List<tb_libro> List = new List<tb_libro>();
            int totalPage = 0;
            List = bo.getLibrosList(filterCriteria, filter, sortColumnName, sortOrder, pageSize, currentPage, out totalPage);

            ResponseModel resopnse = new ResponseModel();
            resopnse.sortOrder = sortOrder;
            resopnse.totalPage = totalPage;
            resopnse.currentPage = currentPage;
            resopnse.sortColumnName = sortColumnName;
            resopnse.List = List;

            return resopnse;
        }
        public class ResponseModel
        {

        public string sortOrder { set; get; }
        public int currentPage { set; get; }
        public string sortColumnName { set; get; }
        public int totalPage { set; get; }
        public List<tb_libro> List { set; get; }
        }


    }
}
