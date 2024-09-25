function SkillTile({ text, src, width }) {
    const skillTileClassName = `w-${width} skillBox mh-75`;

    return (
        <div className={skillTileClassName}>
            <img className="skillIcon img-fluid mh-80" src={src} alt={text}></img>
            <div className="text-center text-break marginTop10">{text}</div>
        </div>
    );
}

export default SkillTile;