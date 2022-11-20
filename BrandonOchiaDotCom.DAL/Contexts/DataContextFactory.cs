namespace BrandonOchiaDotCom.DAL.Contexts
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Design;

    public class DataContextFactory : IDesignTimeDbContextFactory<DataContext>
    {
        public DataContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<DataContext>();
            optionsBuilder.UseSqlServer("Server=tcp:brandonochiadotcomsql.database.windows.net,1433;Initial Catalog=BrandonOchiaDotCom;Persist Security Info=False;User ID=bochia;Password=Wesley6290?;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

            return new DataContext(optionsBuilder.Options);
        }
    }
}
