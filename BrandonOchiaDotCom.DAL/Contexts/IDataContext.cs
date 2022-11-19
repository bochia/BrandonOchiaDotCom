namespace BrandonOchiaDotCom.DAL.Contexts
{
    using BrandonOchiaDotCom.DAL.Models;
    using Microsoft.EntityFrameworkCore;

    public interface IDataContext
    {
        DbSet<BodyScaleDataPoint> BodyScaleDataPoints { get; set; }
    }
}
