namespace BrandonOchiaDotCom.BLL.Services.Interfaces
{
    using BrandonOchiaDotCom.BLL.Models;
    using BrandonOchiaDotCom.Domain.DTOs;

    public interface IBodyScaleDataService
    {
        /// <summary>
        /// Add a new body scale data point.
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        ServiceResponse<BodyScaleDataPointDto> Create(BodyScaleDataPointDto model);

        /// <summary>
        /// Delete a body scale data point.
        /// </summary>
        ServiceResponse Delete(int id);

        /// <summary>
        /// Get a body scale data point by its id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        ServiceResponse<BodyScaleDataPointDto> Get(int id);

        /// <summary>
        /// Get all body scale data points.
        /// </summary>
        /// <returns></returns>
        ServiceResponse<IEnumerable<BodyScaleDataPointDto>> GetAll();

        /// <summary>
        /// Update an existing body scale data point.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        ServiceResponse<BodyScaleDataPointDto> Update(BodyScaleDataPointDto model);
    }
}
