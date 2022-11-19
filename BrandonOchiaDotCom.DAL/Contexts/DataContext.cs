namespace BrandonOchiaDotCom.DAL.Contexts
{
    using BrandonOchiaDotCom.DAL.Models;
    using Microsoft.EntityFrameworkCore;

    public class DataContext : DbContext, IDataContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<BodyScaleDataPoint> BodyScaleDataPoints { get; set; }
    }
}
