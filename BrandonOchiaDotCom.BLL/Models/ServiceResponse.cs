namespace BrandonOchiaDotCom.BLL.Models
{
    public class ServiceResponse<T>
    {
        public T? Data { get; set; }
        public int ErrorCode { get; set; }
        public string? ErrorMessage { get; set; }
        public int HttpStatusCode { get; set; }
        public bool Success { get; set; } = false; // default to failure.
    }
}
