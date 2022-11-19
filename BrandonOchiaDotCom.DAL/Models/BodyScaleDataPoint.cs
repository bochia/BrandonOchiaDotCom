namespace BrandonOchiaDotCom.DAL.Models
{
    public class BodyScaleDataPoint
    {
        public int Id { get; init; }
        public DateTime Date { get; init; }
        public decimal WeightPounds { get; init; }
        public decimal WeightKilograms { get; init; }
        public decimal? BodyFatPercentage { get; init; }
    }
}
