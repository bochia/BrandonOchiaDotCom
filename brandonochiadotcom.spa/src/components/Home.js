import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    componentDidMount() {

        var particleContainer = $("#particleContainer").jParticle({
            background: "black",
            color: "#fff",
            resize: true
        });

        var options = {
            strings: ['Full-Stack Developer', 'Software Engineer', 'UW - Madison Graduate',
                'Mechanical Engineering - Bachelor of Science Degree', 'Fisherman', 'Gamer', 'Devoted Cat Dad'],
            smartBackspace: true,
            typeSpeed: 50,
            loop: true
        };

        this.typed = new Typed('#myDescriptors', options);
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting to prevent memory leaks.
        this.typed.destroy();
    }

    render() {
        return (
            <div className="container-1 fullWidth whiteFont">

                <div id="particleContainer" className="pageDividerBox">
                    <div className="headingContainer d-flex overlay">
                        <div className="headingBox-1 m-5">
                            <h1>Brandon Ochia</h1>
                            <p id="myDescriptors" className="visible-lg-inline typed-cursor h4 d-inline"></p><br /><br />
                        </div>
                        <div className="headingBox-2 align-self-center">
                            <img className="circleImage floatRight headshotPic" src="/images/headshot.jpg" alt="Headshot Photo" />
                        </div>
                    </div>

                    <div id="gradientBackgroundContainer" className="gradientBackground Transparency30Percent whiteFont"></div>
                </div>


                <div id="aboutContainer" className="pageDividerBox grayBackground">
                    <div className="row h-100 align-items-center">
                        <div className="col-6 text-center">
                            <h1 className="gradientText">About</h1>
                            <p className="h3 p-3 textLeft marginLeft10">
                                Hi! My name's Brandon and welcome to my website. I'm a full-stack developer, and also a software engineer. I enjoy anything coding related,
                                and have a passion for implementing functionality and exploring new technologies.
                                This web app acts as both my portofolio, as well as my personal playground to try new technologies, techniques, and explore the unkown.
                                This site runs on ASP.NET MVC, and also uses the following technologies: Entity Framework, Bootstrap, AJAX, RESTful Web APIs, etc...
                                When you visit each of my projects you will find a description of its purpose and any lessons learned.
                                Thank you for taking the time to explore my work, and enjoy! Also feel free to take a look at my resume.
                            </p>
                        </div>
                        <div className="col-6 text-center">
                            <a className="grayLink text-center mh-80" href="/Documents/Resume-BrandonOchia.pdf" target="_blank">
                                <img className="borderRadius20 grayScaleTillHover img-fluid" src="/Images/resumeIcon.png" alt="Resume Icon" />
                                <p className="marginTop10">View Resume <span className="fas fa-arrow-right"></span></p>
                            </a>
                        </div>
                    </div>
                </div>


                <div id="projectsContainer" className="pageDividerBox blackBackground">

                    <div id="projectsTextContainer" className="gradientText minWidth300 w-100">
                        <h1 className="text-center">P r o j e c t s</h1>
                    </div>

                    <div className="d-flex flex-row flex-wrap justify-content-around h-60 w-100">

                        <div className="projectBox">
                            <div className="projectBoxMedia onTop row">
                                <div className="col-5 align-self-center mh-100">
                                    <a href="">
                                    <img className="img-fluid grayScaleTillHover" src="/Images/pdfIcon.png" alt="PDF Logo" />
                                </a>
                            </div>
                            <div className="col-7 h-100 mh-100">
                                <div className="projectBoxDescription mh-100">
                                    <h3 className="gradientText">PDF Splitter</h3>
                                    <p>Full-stack web app that allows for splitting PDFs in number of different ways. </p>
                                    <p>Makes use of file storage rather than writing and reading PDFs to a database.</p>
                                    <a className="grayLink" href="">Go see project  <span className="fas fa-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="projectBox">
                    <div className="projectBoxMedia onTop row">
                        <div className="col-5 align-self-center mh-100">
                            <a href="">
                            <img className="img-fluid circleImage padding10 grayScaleTillHover" src="/Images/weightTrackerIcon.jpg" alt="Plot Icon" />
                        </a>
                    </div>
                    <div className="col-7 h-100 mh-100">
                        <div className="projectBoxDescription mh-100">
                            <h3 className="gradientText">Body Weight Tracker</h3>
                            <p>Full-stack web app for tracking body weight and body fat percentage over time. Great for diet monitoriing.</p>
                            <p>Implements full CRUD functionality, as well as AJAX calls to RESTful Web APIs.</p>
                            <a className="grayLink" href="">Go see project  <span className="fas fa-arrow-right"></span></a>
                    </div>
                </div>
            </div>
                </div >

            </div >
        </div >


            <div id="skillsContainer" className="pageDividerBox grayBackground text-center">
                <div className="mh-10 gradientText">
                    <h1>S k i l l s    &amp;    T e c h n o l o g i e s</h1>
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-center mh-90">
                    <div className="w-10 skillBox mh-75">
                        <img className="skillIcon img-fluid mh-80" src="/Images/csharpLogo.png"></img>
                            <div className="text-center text-break marginTop10">C#</div>
                    </div>
                    <div className="w-10 skillBox mh-75">
                            <img className="skillIcon img-fluid mh-80" src="/Images/aspNetCoreLogo.png"></img>
                            <div className="text-center text-break marginTop10">ASP.NET Core Web API</div>
                    </div>
                    <div className="w-10 skillBox mh-75">
                            <img className="skillIcon img-fluid mh-80" src="/Images/microsoftSqlServerIcon.png"></img>
                            <div className="text-center text-break marginTop10">SQL</div>
                    </div>
                    <div className="w-20 skillBox mh-75">
                            <img className="skillIcon img-fluid mh-80" src="/Images/entityFrameworkIcon.png"></img>
                            <div className="text-center text-break marginTop10">Entity Framework Core</div>
                    </div>
                    <div className="w-10 skillBox mh-75">
                            <img className="skillIcon img-fluid mh-80" src="/Images/reactLogo.png"></img>
                            <div className="text-center text-break marginTop10">ReactJS</div>
                    </div>
                    <div className="w-20 skillBox mh-75">
                            <img className="skillIcon img-fluid mh-80" src="/Images/visualStudioLogo.png"></img>
                            <div className="text-center text-break marginTop10">Visual Studio</div>
                    </div>
                </div>
            </div>

    </div >
        );
    }
}
