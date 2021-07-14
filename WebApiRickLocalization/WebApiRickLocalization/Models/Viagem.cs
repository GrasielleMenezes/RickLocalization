using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiRickLocalization.Models
{
    public class Viagem
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(100)]
        public string nome { get; set; }
        public string endereco { get; set; }
        public string dataViagem { get; set; }
        public string observacao { get; set; }
        public int dimensao { get; set; }
    }
}
