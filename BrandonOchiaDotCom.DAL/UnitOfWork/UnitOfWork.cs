namespace BrandonOchiaDotCom.DAL.UnitOfWork
{
    using BrandonOchiaDotCom.DAL.Repos.Interfaces;
    using Microsoft.EntityFrameworkCore;

    public class UnitOfWork : IUnitOfWork
    {
        private readonly DbContext dbContext;
        private readonly IBodyScaleDataPointRepo bodyScaleDataPoints;

        public UnitOfWork(DbContext dbContext, IBodyScaleDataPointRepo bodyScaleDataPointRepo)
        {
            this.dbContext = dbContext;
            bodyScaleDataPoints = bodyScaleDataPointRepo;
        }

        public void Save()
        {
            if (dbContext.ChangeTracker.HasChanges())
            {
                dbContext.SaveChanges();
            }
        }
    }
}
