function AboutMeSection() {
    return (
        <div className="col-md-6 col-sm-12 text-center">
            <h1 className="gradientText">About Me</h1>
            <p className="fs-1 fs-md-2 fs-sm-5 p-3 textLeft marginLeft10">
                My name's Brandon and welcome to my website. I'm a full-stack developer who specializes in the backend. I enjoy anything coding related,
                and have a passion for building web apps and exploring new technologies.
                This web app acts as both my portofolio, as well as my personal playground to try new technologies, techniques, and explore the unkown.
                This site was built with ASP.NET Core Web API for the backend which runs on an Azure App Service.
                The frontend is built with a React.js SPA and is deployed with a Static Web App in Azure.
                This site also uses the following technologies: Entity Framework Core, Bootstrap, a personal PDF processor nuget package I built and deployed, etc...
                Thank you for taking the time to explore my work, and enjoy! Also feel free to take a look at my resume, cheers!
            </p>
        </div>
    );
}

export default AboutMeSection;