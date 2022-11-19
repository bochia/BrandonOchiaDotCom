namespace BrandonOchiaDotCom.API.Controllers
{
    using BrandonOchiaDotCom.BLL.Models;
    using BrandonOchiaDotCom.BLL.Services.Interfaces;
    using BrandonOchiaDotCom.Domain.DTOs;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("[controller]")]
    public class BodyScaleDataController : ControllerBase
    {
        private readonly IBodyScaleDataService bodyScaleDataService;
        private readonly ILogger<BodyScaleDataController> logger;

        public BodyScaleDataController(IBodyScaleDataService bodyScaleDataService,
                                       ILogger<BodyScaleDataController> logger)
        {
            this.bodyScaleDataService = bodyScaleDataService;
            this.logger = logger;
        }

        [HttpGet(Name = "GetAll")]
        public IActionResult GetAll()
        {
            ServiceResponse<IEnumerable<BodyScaleDataPointDto>> getAllResponse = bodyScaleDataService.GetAll();

            if (!getAllResponse.Success)
            {
                return Problem(
                    detail: getAllResponse.ErrorMessage,
                    statusCode: getAllResponse.ErrorCode);
            }

            if (!getAllResponse.Data.Any())
            {
                return NotFound();
            }

            return Ok(getAllResponse.Data);
        }
    }
}