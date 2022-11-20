namespace BrandonOchiaDotCom.DAL.UnitOfWork
{
    using BrandonOchiaDotCom.DAL.Repos.Interfaces;

    public interface IUnitOfWork
    {
        public IBodyScaleDataPointRepo BodyScaleDataPoints { get; }
        void Save();
    }
}
