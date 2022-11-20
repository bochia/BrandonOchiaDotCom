namespace BrandonOchiaDotCom.DAL.UnitOfWork
{
    using BrandonOchiaDotCom.DAL.Repos.Interfaces;
    using Microsoft.EntityFrameworkCore;

    public class UnitOfWork : IUnitOfWork
    {
        private readonly DbContext dbContext;
        public IBodyScaleDataPointRepo BodyScaleDataPoints { get; }

        public UnitOfWork(DbContext dbContext, IBodyScaleDataPointRepo bodyScaleDataPointRepo)
        {
            this.dbContext = dbContext;
            BodyScaleDataPoints = bodyScaleDataPointRepo;
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
