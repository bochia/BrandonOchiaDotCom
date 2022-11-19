namespace BrandonOchiaDotCom.API.Extensions
{
    using BrandonOchiaDotCom.BLL.Services;
    using BrandonOchiaDotCom.BLL.Services.Interfaces;

    public static class DependencyInjectionExtensions
    {
        public static void AddServices(this IServiceCollection services)
        {
            services.AddScoped<IBodyScaleDataService, BodyScaleDataService>();
        }

        public static void AddRepos(this IServiceCollection services)
        {

        }

    }
}
