namespace BrandonOchiaDotCom.BLL.Models
{
    public enum ServiceResponseErrorCodes
    {
        UnknownInternalError,
        ErrorCreatingItem,
        ErrorCreatingItemSinceItAlreadyHasAnID,
        ErrorDeletingItem,
        ErrorUpdatingItem,
        ErrorUpdatingItemSinceInvalidIdWasGiven,
        ErrorRetrievingItem,
        ErrorRetrievingItems,
        ErrorDuringProcessing
    }
}
