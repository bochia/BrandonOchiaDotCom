using BrandonOchiaDotCom.DAL.Contexts;
using BrandonOchiaDotCom.Domain.Mapping;
using Microsoft.EntityFrameworkCore;
using static BrandonOchiaDotCom.API.Extensions.DependencyInjectionExtensions;

var builder = WebApplication.CreateBuilder(args);


IConfiguration configuration = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .Build();

const string AllowedSpecificOrigins = "AllowedSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowedSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("https://localhost:3000");
                      });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(AutoMapperProfile).Assembly);
builder.Services.AddDbContext<DataContext>(
    options => options.UseSqlServer(configuration.GetConnectionString("BrandonOchiaDotCom")));
builder.Services.AddServices();
builder.Services.AddRepos();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
}

app.UseSwagger();
app.UseSwaggerUI();
app.UseExceptionHandler("/ExceptionHandler/error");

app.UseCors(AllowedSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
