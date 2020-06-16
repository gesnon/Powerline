using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class Powerline
    {
        public int ID { get; set; }
        public string Name { get; set; }

        public List<ContractPIR> ContractPIR {get;set;}
    }
}
