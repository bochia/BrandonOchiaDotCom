namespace BrandonOchiaDotCom.DAL.Repos
{
    using BrandonOchiaDotCom.DAL.Models;
    using BrandonOchiaDotCom.DAL.Repos.Base;
    using BrandonOchiaDotCom.DAL.Repos.Interfaces;
    using Microsoft.EntityFrameworkCore;

    public class BodyScaleDataPointRepo : GenericRepository<BodyScaleDataPoint>, IBodyScaleDataPointRepo
    {
        public BodyScaleDataPointRepo(DbContext dbContext) : base(dbContext)
        {
        }
    }
}
