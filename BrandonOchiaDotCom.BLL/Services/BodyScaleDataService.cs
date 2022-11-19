namespace BrandonOchiaDotCom.BLL.Services
{
    using BrandonOchiaDotCom.BLL.Models;
    using BrandonOchiaDotCom.BLL.Services.Interfaces;
    using BrandonOchiaDotCom.DAL.UnitOfWork;
    using BrandonOchiaDotCom.Domain.DTOs;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Logging;
    using System;
    using System.Collections.Generic;

    public class BodyScaleDataService : IBodyScaleDataService
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly ILogger<BodyScaleDataService> logger;

        public BodyScaleDataService(IUnitOfWork unitOfWork, ILogger<BodyScaleDataService> logger)
        {
            this.unitOfWork = unitOfWork;
            this.logger = logger;
        }

        public ServiceResponse<BodyScaleDataPointDto> Create(BodyScaleDataPointDto model)
        {
            ArgumentNullException.ThrowIfNull(model);

            if (model.Id > 0)
            {
                return new ServiceResponse<BodyScaleDataPointDto>()
                {
                    HttpStatusCode = StatusCodes.Status400BadRequest,
                    Success = false,
                    ErrorCode = (int)ServiceResponseErrorCodes.ErrorCreatingItemSinceItAlreadyHasAnID,
                    ErrorMessage = $"{nameof(BodyScaleDataPointDto)} model must have id = 0 when creating.",
                };
            }

            try
            {
                // ochia - add mapping code here.
                unitOfWork.Save();

                // ochia - map back to dto.
                var result = new BodyScaleDataPointDto();

                return new ServiceResponse<BodyScaleDataPointDto>()
                {
                    Success = true,
                    Data = result
                };
            }
            catch (Exception ex)
            {
                logger.LogError(ex, ex.Message);
                throw;
            }
        }

        public void Delete()
        {
            throw new NotImplementedException();
        }

        public ServiceResponse<BodyScaleDataPointDto> Get(int id)
        {
            throw new NotImplementedException();
        }

        public ServiceResponse<IEnumerable<BodyScaleDataPointDto>> GetAll()
        {
            var data = Enumerable.Range(1, 5).Select(index => new BodyScaleDataPointDto
            {
                Id = Random.Shared.Next(0, 50),
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                WeightPounds = Random.Shared.Next(0, 50),
                BodyFatPercentage = Random.Shared.Next(0, 50),
            })
            .ToArray();

            return new ServiceResponse<IEnumerable<BodyScaleDataPointDto>>()
            {
                Success = true,
                Data = data,
            };
        }

        public ServiceResponse<BodyScaleDataPointDto> Update(int id)
        {
            throw new NotImplementedException();
        }
    }
}
