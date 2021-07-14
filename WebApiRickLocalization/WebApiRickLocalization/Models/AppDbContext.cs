using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiRickLocalization.Repository;

namespace WebApiRickLocalization.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
        }
        public DbSet<Viagem> Viagens { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new ViagemMapping());
        }
        public void AddViagem(Viagem viagem_)
        {
            Viagens.Add(viagem_);
            this.SaveChanges();
            return;
        }
       
    }
}
