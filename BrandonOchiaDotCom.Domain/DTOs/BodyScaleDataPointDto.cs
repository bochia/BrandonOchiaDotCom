namespace BrandonOchiaDotCom.Domain.DTOs
{
    using System;

    public record BodyScaleDataPointDto
    {
        public int Id { get; init; }
        public DateTime Date { get; init; } // will only be using the date of this.
        public decimal WeightPounds { get; init; }
        public decimal WeightKilograms { get; init; }
        public decimal? BodyFatPercentage { get; init; }
    }
}
