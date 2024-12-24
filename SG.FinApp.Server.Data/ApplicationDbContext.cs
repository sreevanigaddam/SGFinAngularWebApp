using Microsoft.EntityFrameworkCore;
using SG.FinApp.EntityLayer.Entities;

namespace SG.FinApp.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Currency> Currencies { get; set; }
    }
}




