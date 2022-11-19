namespace BrandonOchiaDotCom.DAL.Repos
{
    using BrandonOchiaDotCom.DAL.Contexts;
    using BrandonOchiaDotCom.DAL.Models;
    using BrandonOchiaDotCom.DAL.Repos.Base;
    using BrandonOchiaDotCom.DAL.Repos.Interfaces;

    public class BodyScaleDataPointRepo : BaseRepository<BodyScaleDataPoint>, IBodyScaleDataPointRepo
    {
        public BodyScaleDataPointRepo(DataContext dbContext) : base(dbContext)
        {
        }
    }
}
