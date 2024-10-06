import buildImageUrl from '../utils/imageUrlBuilder';
function ResumeTile() {

    const resumeSrc = `${process.env.REACT_APP_BLOB_STORAGE_URL}/documents/Resume-BrandonOchia.pdf`;
    const imgSrc = buildImageUrl('resumeIcon.png')

    return (
        <div className="col-md-3 col-sm-12 text-center">
            <a className="grayLink text-center mh-80" href={resumeSrc} target="_blank" rel="noreferrer">
                <img className="borderRadius20 grayScaleTillHover d-none d-md-inline" src={imgSrc} alt="Resume Icon" />
                <p className="marginTop10">View Resume <span className="fas fa-arrow-right"></span></p>
            </a>
        </div>
    );
}

export default ResumeTile;