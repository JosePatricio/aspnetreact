//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Ejercicio1.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tb_libro
    {
        public int id_libro { get; set; }
        public string nombre { get; set; }
        public string descripcion { get; set; }
        public string autor { get; set; }
        public System.DateTime fecha { get; set; }
        public int ejemplares { get; set; }
        public decimal costo { get; set; }
    }
}
