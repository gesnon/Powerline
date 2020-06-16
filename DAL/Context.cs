using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public class Context: DbContext
    {
        public DbSet<Powerline> Powerlines { get; set; }

        public DbSet<ContractPIR> ContractPIRs { get; set; }

        public Context(DbContextOptions<Context> Options) : base(Options)
        {
            Database.EnsureCreated();
        }
    }
}
