namespace BrandonOchiaDotCom.BLL.Models
{
    public class ServiceResponse
    {
        public int ErrorCode { get; set; }
        public string? ErrorMessage { get; set; }
        public int HttpStatusCode { get; set; }
        public bool Success { get; set; } = false; // default to failure.
    }

    public class ServiceResponse<T> : ServiceResponse
    {
        public T? Data { get; set; }
    }
}
