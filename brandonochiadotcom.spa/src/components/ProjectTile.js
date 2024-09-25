import buildImageUrl from '../utils/imageUrlBuilder';
import { Link } from 'react-router-dom';

function ProjectTile({ title, p1, p2, linkTo, imageNameWithExtension, altText, isCircleImage = false, workInProgress = false }) {
    let imgClassName = "img-fluid grayScaleTillHover";

    const imgSrc = buildImageUrl(imageNameWithExtension);

    // if circle image then add some extra styling.
    if (isCircleImage) {
        imgClassName = "img-fluid circleImage padding10 grayScaleTillHover";
    }

    //TODO: If project not ready want to have text that says, coming soon or something like that.
    let linkHtml;
    if (!workInProgress) {
        linkHtml = <Link className="grayLink" to={linkTo}>Go see project  <span className="fas fa-arrow-right"></span></Link>
    } else {
        //TODO: not actually a link rename this variable.
        linkHtml = <b><p>COMING SOON!</p></b>
    }

    return (
        <div className="projectBox">
            <div className="projectBoxMedia onTop row">
                <div className="col-5 align-self-center mh-100">
                    <Link to={linkTo}>
                        <img className={imgClassName} src={imgSrc} alt={altText} />
                    </Link>
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