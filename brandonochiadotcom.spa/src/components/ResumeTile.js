function ResumeTile() {
    return (
        <div className="col-6 text-center">
            <a className="grayLink text-center mh-80" href="/Documents/Resume-BrandonOchia.pdf" target="_blank">
                <img className="borderRadius20 grayScaleTillHover img-fluid" src="/Images/resumeIcon.png" alt="Resume Icon" />
                <p className="marginTop10">View Resume <span className="fas fa-arrow-right"></span></p>
            </a>
        </div>
    );
}

export default ResumeTile;