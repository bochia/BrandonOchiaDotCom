namespace BrandonOchiaDotCom.API.Extensions
{
    using BrandonOchiaDotCom.BLL.Services;
    using BrandonOchiaDotCom.BLL.Services.Interfaces;
    using BrandonOchiaDotCom.DAL.Contexts;
    using BrandonOchiaDotCom.DAL.Repos;
    using BrandonOchiaDotCom.DAL.Repos.Interfaces;
    using BrandonOchiaDotCom.DAL.UnitOfWork;
    using Microsoft.EntityFrameworkCore;

    public static class DependencyInjectionExtensions
    {
        public static void AddServices(this IServiceCollection services)
        {
            services.AddScoped<IBodyScaleDataService, BodyScaleDataService>();
        }

        public static void AddRepos(this IServiceCollection services)
        {
            services.AddScoped<DbContext, DataContext>();
            services.AddScoped<IBodyScaleDataPointRepo, BodyScaleDataPointRepo>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
        }

    }
}
