namespace BrandonOchiaDotCom.API.Controllers.Base
{
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [EnableCors("AllowedSpecificOrigins")]
    [ApiController]
    public abstract class BaseApiController<T> : ControllerBase
        where T : BaseApiController<T>
    {
        protected readonly ILogger<T> logger;
        public BaseApiController(ILogger<T> logger)
        {
            this.logger = logger;
        }
    }
}
