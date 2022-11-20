namespace BrandonOchiaDotCom.DAL.Contexts
{
    using BrandonOchiaDotCom.DAL.Models;
    using Microsoft.EntityFrameworkCore;

    public class DataContext : DbContext, IDataContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=tcp:brandonochiadotcomsql.database.windows.net,1433;Initial Catalog=BrandonOchiaDotCom;Persist Security Info=False;User ID=bochia;Password=Wesley6290?;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
        }

        public DbSet<BodyScaleDataPoint> BodyScaleDataPoints { get; set; }
    }
}
