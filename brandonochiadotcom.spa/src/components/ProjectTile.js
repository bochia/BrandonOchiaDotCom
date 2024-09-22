function ProjectTile({ title, p1, p2, linkTo, imgSrc, altText, isCircleImage = false, workInProgress = false }) {
    let imgClassName = "img-fluid grayScaleTillHover";

    // if circle image then add some extra styling.
    if (isCircleImage) {
        imgClassName = "img-fluid circleImage padding10 grayScaleTillHover";
    }

    let linkHtml;

    if (!workInProgress) {
        linkHtml = <a className="grayLink" href={linkTo}>Go see project  <span className="fas fa-arrow-right"></span></a>;
    }

    return (
        <div className="projectBox">
            <div className="projectBoxMedia onTop row">
                <div className="col-5 align-self-center mh-100">
                    <a href="">
                        <img className={imgClassName} src={imgSrc} alt={altText} />
                    </a>
                </div>
                <div className="col-7 h-100 mh-100">
                    <div className="projectBoxDescription mh-100">
                        <h3 className="gradientText">{title}</h3>
                        <p>{p1}</p>
                        <p>{p2}</p>
                        {linkHtml}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectTile;