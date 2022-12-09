namespace BrandonOchiaDotCom.API.Controllers
{
    using BrandonOchiaDotCom.API.Controllers.Base;
    using BrandonOchiaDotCom.BLL.Models;
    using BrandonOchiaDotCom.BLL.Services.Interfaces;
    using BrandonOchiaDotCom.Domain.DTOs;
    using Microsoft.AspNetCore.Mvc;

    public class BodyScaleDataController : BaseApiController<BodyScaleDataController>
    {
        private readonly IBodyScaleDataService bodyScaleDataService;

        public BodyScaleDataController(IBodyScaleDataService bodyScaleDataService,
                                       ILogger<BodyScaleDataController> logger) : base(logger)
        {
            this.bodyScaleDataService = bodyScaleDataService;
        }


        [HttpPost]
        [Route("create/")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BodyScaleDataPointDto))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult Create(BodyScaleDataPointDto model)
        {
            if (model is null)
            {
                return BadRequest();
            }

            ServiceResponse<BodyScaleDataPointDto> createResponse = bodyScaleDataService.Create(model);

            if (!createResponse.Success)
            {
                return Problem(
                    detail: createResponse.ErrorMessage,
                    statusCode: createResponse.ErrorCode);
            }

            if (createResponse.Data is null)
            {
                return NotFound();
            }

            return Ok(createResponse.Data);
        }


        [HttpDelete]
        [Route("delete/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult Delete(int id)
        {
            if (id <= 0)
            {
                return BadRequest($"{nameof(id)} must be greater than 0.");
            }

            ServiceResponse deleteResponse = bodyScaleDataService.Delete(id);

            if (!deleteResponse.Success)
            {
                return Problem(
                    detail: deleteResponse.ErrorMessage,
                    statusCode: deleteResponse.ErrorCode);
            }

            return Ok();
        }


        [HttpGet]
        [Route("get/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BodyScaleDataPointDto))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult Get(int id)
        {
            if (id <= 0)
            {
                return BadRequest($"{nameof(id)} must be greater than 0.");
            }

            ServiceResponse<BodyScaleDataPointDto> getResponse = bodyScaleDataService.Get(id);

            if (!getResponse.Success)
            {
                return Problem(
                    detail: getResponse.ErrorMessage,
                    statusCode: getResponse.ErrorCode);
            }

            if (getResponse.Data is null)
            {
                return NotFound();
            }

            return Ok(getResponse.Data);
        }


        [HttpGet]
        [Route("getall/")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<BodyScaleDataPointDto>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
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

        [HttpPut]
        [Route("update/")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BodyScaleDataPointDto))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult Update(BodyScaleDataPointDto model)
        {
            if (model is null)
            {
                return BadRequest();
            }

            ServiceResponse<BodyScaleDataPointDto> createResponse = bodyScaleDataService.Update(model);

            if (!createResponse.Success)
            {
                return Problem(
                    detail: createResponse.ErrorMessage,
                    statusCode: createResponse.ErrorCode);
            }

            if (createResponse.Data is null)
            {
                return NotFound();
            }

            return Ok(createResponse.Data);
        }
    }
}