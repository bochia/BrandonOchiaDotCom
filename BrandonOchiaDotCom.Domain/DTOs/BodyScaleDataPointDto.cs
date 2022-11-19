namespace BrandonOchiaDotCom.Domain.DTOs
{
    using System;

    public record BodyScaleDataPointDto
    {
        public int Id { get; init; }
        public DateOnly Date { get; init; }
        public decimal WeightPounds { get; init; }
        public decimal WeightKilograms { get; init; }
        public decimal? BodyFatPercentage { get; init; }
    }
}
