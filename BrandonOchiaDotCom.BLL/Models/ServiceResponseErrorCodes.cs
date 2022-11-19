namespace BrandonOchiaDotCom.BLL.Models
{
    public enum ServiceResponseErrorCodes
    {
        UnknownInternalError,
        ErrorCreatingItem,
        ErrorCreatingItemSinceItAlreadyHasAnID,
        ErrorDeletingItem,
        ErrorUpdatingItem,
        ErrorUpdatingItemSinceItDoesntHaveAnID,
        ErrorRetrievingItem,
        ErrorRetrievingItems,
        ErrorDuringProcessing
    }
}
