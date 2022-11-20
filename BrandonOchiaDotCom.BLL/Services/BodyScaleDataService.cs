namespace BrandonOchiaDotCom.BLL.Services
{
    using AutoMapper;
    using BrandonOchiaDotCom.BLL.Models;
    using BrandonOchiaDotCom.BLL.Services.Interfaces;
    using BrandonOchiaDotCom.DAL.Models;
    using BrandonOchiaDotCom.DAL.UnitOfWork;
    using BrandonOchiaDotCom.Domain.DTOs;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Logging;
    using System;
    using System.Collections.Generic;

    public class BodyScaleDataService : IBodyScaleDataService
    {
        private readonly IMapper mapper;
        private readonly IUnitOfWork unitOfWork;
        private readonly ILogger<BodyScaleDataService> logger;

        public BodyScaleDataService(IMapper mapper, IUnitOfWork unitOfWork, ILogger<BodyScaleDataService> logger)
        {
            this.mapper = mapper;
            this.unitOfWork = unitOfWork;
            this.logger = logger;
        }

        /// <inheritdoc />
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
                BodyScaleDataPoint entity = mapper.Map<BodyScaleDataPoint>(model);
                unitOfWork.BodyScaleDataPoints.Insert(entity);
                unitOfWork.Save();

                BodyScaleDataPointDto result = mapper.Map<BodyScaleDataPointDto>(entity);

                return new ServiceResponse<BodyScaleDataPointDto>()
                {
                    Success = true,
                    Data = result
                };
            }
            catch (Exception ex)
            {
                string errorMessage = $"Failed to create {nameof(BodyScaleDataPoint)} - {ex.Message}";
                logger.LogError(ex, errorMessage);

                return new ServiceResponse<BodyScaleDataPointDto>()
                {
                    Success = false,
                    ErrorCode = (int)ServiceResponseErrorCodes.ErrorCreatingItem,
                    ErrorMessage = errorMessage
                };
            }
        }

        /// <inheritdoc />
        public ServiceResponse Delete(int id)
        {
            if (id <= 0)
            {
                return new ServiceResponse()
                {
                    HttpStatusCode = StatusCodes.Status400BadRequest,
                    Success = false,
                    ErrorCode = (int)ServiceResponseErrorCodes.ErrorUpdatingItemSinceInvalidIdWasGiven,
                    ErrorMessage = "ID must be greater than 0.",
                };
            }

            try
            {
                unitOfWork.BodyScaleDataPoints.Delete(id);
                unitOfWork.Save();

                return new ServiceResponse()
                {
                    Success = true
                };
            }
            catch (Exception ex)
            {

                string errorMessage = $"Failed to delete {nameof(BodyScaleDataPoint)} - {ex.Message}";
                logger.LogError(ex, errorMessage);

                return new ServiceResponse()
                {
                    Success = false,
                    ErrorCode = (int)ServiceResponseErrorCodes.ErrorDeletingItem,
                    ErrorMessage = errorMessage
                };
            }
        }

        /// <inheritdoc />
        public ServiceResponse<BodyScaleDataPointDto> Get(int id)
        {
            if (id <= 0)
            {
                return new ServiceResponse<BodyScaleDataPointDto>()
                {
                    HttpStatusCode = StatusCodes.Status400BadRequest,
                    Success = false,
                    ErrorCode = (int)ServiceResponseErrorCodes.ErrorUpdatingItemSinceInvalidIdWasGiven,
                    ErrorMessage = "ID must be greater than 0.",
                };
            }

            try
            {
                BodyScaleDataPoint entity = unitOfWork.BodyScaleDataPoints.GetById(id);
                BodyScaleDataPointDto result = mapper.Map<BodyScaleDataPointDto>(entity);

                return new ServiceResponse<BodyScaleDataPointDto>()
                {
                    Success = true,
                    Data = result
                };
            }
            catch (Exception ex)
            {
                string errorMessage = $"Failed to get {nameof(BodyScaleDataPoint)} - {ex.Message}";
                logger.LogError(ex, errorMessage);

                return new ServiceResponse<BodyScaleDataPointDto>()
                {
                    Success = false,
                    ErrorCode = (int)ServiceResponseErrorCodes.ErrorRetrievingItem,
                    ErrorMessage = errorMessage
                };
            }
        }

        /// <inheritdoc />
        public ServiceResponse<IEnumerable<BodyScaleDataPointDto>> GetAll()
        {

            try
            {
                IEnumerable<BodyScaleDataPoint> entities = unitOfWork.BodyScaleDataPoints.GetAll();
                IEnumerable<BodyScaleDataPointDto> result = mapper.Map<IEnumerable<BodyScaleDataPointDto>>(entities);

                return new ServiceResponse<IEnumerable<BodyScaleDataPointDto>>()
                {
                    Success = true,
                    Data = result
                };
            }
            catch (Exception ex)
            {
                string errorMessage = $"Failed to get all {nameof(BodyScaleDataPoint)} - {ex.Message}";
                logger.LogError(ex, errorMessage);

                return new ServiceResponse<IEnumerable<BodyScaleDataPointDto>>()
                {
                    Success = false,
                    ErrorCode = (int)ServiceResponseErrorCodes.ErrorRetrievingItems,
                    ErrorMessage = errorMessage
                };
            }
        }

        /// <inheritdoc />
        public ServiceResponse<BodyScaleDataPointDto> Update(BodyScaleDataPointDto model)
        {
            ArgumentNullException.ThrowIfNull(model);

            if (model.Id <= 0)
            {
                return new ServiceResponse<BodyScaleDataPointDto>()
                {
                    HttpStatusCode = StatusCodes.Status400BadRequest,
                    Success = false,
                    ErrorCode = (int)ServiceResponseErrorCodes.ErrorUpdatingItemSinceInvalidIdWasGiven,
                    ErrorMessage = $"{nameof(BodyScaleDataPointDto)} model must have id greater than 0 when updating.",
                };
            }

            try
            {
                BodyScaleDataPoint entity = mapper.Map<BodyScaleDataPoint>(model);
                unitOfWork.BodyScaleDataPoints.Update(entity);
                unitOfWork.Save();

                BodyScaleDataPointDto result = mapper.Map<BodyScaleDataPointDto>(entity);

                return new ServiceResponse<BodyScaleDataPointDto>()
                {
                    Success = true,
                    Data = result
                };
            }
            catch (Exception ex)
            {
                string errorMessage = $"Failed to get all {nameof(BodyScaleDataPoint)} - {ex.Message}";
                logger.LogError(ex, errorMessage);

                return new ServiceResponse<BodyScaleDataPointDto>()
                {
                    Success = false,
                    ErrorCode = (int)ServiceResponseErrorCodes.ErrorUpdatingItem,
                    ErrorMessage = errorMessage
                };
            }
        }
    }
}
