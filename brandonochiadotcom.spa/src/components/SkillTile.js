import buildImageUrl from '../utils/imageUrlBuilder';

function SkillTile({ text, imageNameWithExtension, width }) {
    const skillTileClassName = `w-${width} skillBox mh-75`;

    const imgSrc = buildImageUrl(imageNameWithExtension);

    return (
        <div className={skillTileClassName}>
            <img className="skillIcon img-fluid mh-80" src={imgSrc} alt={text}></img>
            <div className="text-center text-break marginTop10">{text}</div>
        </div>
    );
}

export default SkillTile;