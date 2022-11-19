namespace BrandonOchiaDotCom.Domain.Mapping
{
    using AutoMapper;
    using BrandonOchiaDotCom.DAL.Models;
    using BrandonOchiaDotCom.Domain.DTOs;

    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<BodyScaleDataPoint, BodyScaleDataPointDto>()
                .ForMember(dto => dto.Id, map => map.MapFrom(entity => entity.Id))
                .ForMember(dto => dto.Date, map => map.MapFrom(entity => entity.Date))
                .ForMember(dto => dto.WeightPounds, map => map.MapFrom(entity => entity.WeightPounds))
                .ForMember(dto => dto.WeightKilograms, map => map.MapFrom(entity => entity.WeightKilograms))
                .ForMember(dto => dto.BodyFatPercentage, map => map.MapFrom(entity => entity.BodyFatPercentage))
                .ReverseMap();

            //CreateMap<BodyScaleDataPointDto, BodyScaleDataPoint>(); //ochia - can I delete this?
        }
    }
}
