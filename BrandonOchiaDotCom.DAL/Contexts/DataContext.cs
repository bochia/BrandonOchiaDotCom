namespace BrandonOchiaDotCom.DAL.Contexts
{
    using BrandonOchiaDotCom.DAL.Models;
    using Microsoft.EntityFrameworkCore;

    public class DataContext : DbContext, IDataContext
    {
        public DbSet<BodyScaleDataPoint> BodyScaleDataPoints { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
    }
}
