
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic;
namespace Negocio
{
   public class bookBo
    {

        public List<tb_libro>  getList() {
            List<tb_libro> List = new List<tb_libro>();
            using (MyDatabaseEntities dc = new MyDatabaseEntities())
            {
                var emp = dc.tb_libro;
                List = emp.ToList();
            }

            return List;
    }

        
        public List<tb_libro> getLibrosList(string filterCriteria , string filter , string sortColumnName , string sortOrder, int pageSize, int currentPage, out int totalPageOut )
        {
            List<tb_libro> List = new List<tb_libro>();
            int totalPage = 0;
            int totalRecord = 0;

            using (MyDatabaseEntities dc = new MyDatabaseEntities())
            {
                var emp = dc.tb_libro;
                totalRecord = emp.Count();
                if (pageSize > 0)
                {
                    totalPage = totalRecord / pageSize + ((totalRecord % pageSize) > 0 ? 1 : 0);
                    List = emp.OrderBy(sortColumnName + " " + sortOrder).Skip(pageSize * (currentPage - 1)).Take(pageSize).ToList();

            
                    if (filter != "" && filter!=null)
                    {
                        switch (filterCriteria)
                        {
                            case "Contains":
                                List = (from c in List where c.nombre.IndexOf(filter) >= 0 select c).ToList();
                                break;
                            case "Not Contains":
                                List = (from c in List where !(c.nombre.IndexOf(filter) >= 0) select c).ToList();

                                break;
                            case "Equals":
                                List = List.FindAll(x => (x.nombre == filter));
                                break;
                            case "Not equal":
                                List = List.FindAll(x => (x.nombre != filter));
                                break;
                            case "Starts with":
                                List = List.Where(r => r.nombre.StartsWith(filter)).ToList();
                                break;
                            case "Ends with":
                                List = List.Where(r => r.nombre.EndsWith(filter)).ToList();
                                break;
                            default:
                                break;
                        }
                    }


                }
                else
                {
                    List = emp.ToList();
                }
            }
            totalPageOut = totalPage;
            return List;
        }


    }
}
