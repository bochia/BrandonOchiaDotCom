function buildImageUrl(imageNameWithExtension) {
    if (!process.env.REACT_APP_BLOB_STORAGE_URL) {
        console.log('REACT_APP_BLOB_STORAGE_URL cannot be undefined or empty string.');
    }

    //TODO: Need to get this working in production.
    return `${process.env.REACT_APP_BLOB_STORAGE_URL}/images/${imageNameWithExtension}`;
}

export default buildImageUrl;