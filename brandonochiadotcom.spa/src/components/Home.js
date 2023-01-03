import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    componentDidMount() {
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
            <div class="container-1 fullWidth whiteFont">

                <div id="particleContainer" class="pageDividerBox">
                    <div class="headingContainer d-flex overlay">
                        <div class="headingBox-1 m-5">
                            <h1>Brandon Ochia</h1>
                            <p id="myDescriptors" class="visible-lg-inline typed-cursor h4 d-inline"></p><br /><br />
                        </div>
                        <div class="headingBox-2 align-self-center">
                            <img style="width:450px" class="circleImage floatRight" src="/images/headshot.jpg" alt="Headshot Photo" />
                        </div>
                    </div>

                    <div id="gradientBackgroundContainer" class="gradientBackground Transparency30Percent whiteFont"></div>
                </div>


                <div id="aboutContainer" class="pageDividerBox grayBackground">
                    <div class="row h-100 align-items-center">
                        <div class="col-6 text-center">
                            <h1 class="gradientText">About</h1>
                            <p class="h3 p-3 textLeft marginLeft10">
                                Hi! My name's Brandon and welcome to my website. I'm a full-stack developer, and also a software engineer. I enjoy anything coding related,
                                and have a passion for implementing functionality and exploring new technologies.
                                This web app acts as both my portofolio, as well as my personal playground to try new technologies, techniques, and explore the unkown.
                                This site runs on ASP.NET MVC, and also uses the following technologies: Entity Framework, Bootstrap, AJAX, RESTful Web APIs, etc...
                                When you visit each of my projects you will find a description of its purpose and any lessons learned.
                                Thank you for taking the time to explore my work, and enjoy! Also feel free to take a look at my resume.
                            </p>
                        </div>
                        <div class="col-6 text-center">
                            <a class="grayLink text-center mh-80" href="/Documents/Resume-BrandonOchia.pdf" target="_blank">
                                <img class="borderRadius20 grayScaleTillHover img-fluid" src="/Images/resumeIcon.png" alt="Resume Icon" />
                                <p class="marginTop10">View Resume <span class="fas fa-arrow-right"></span></p>
                            </a>
                        </div>
                    </div>
                </div>


                <div id="projectsContainer" class="pageDividerBox blackBackground">

                    <div id="projectsTextContainer" class="gradientText minWidth300 w-100">
                        <h1 class="text-center">P r o j e c t s</h1>
                    </div>

                    <div class="d-flex flex-row flex-wrap justify-content-around h-60 w-100">

                        <div class="projectBox">
                            <div class="projectBoxMedia onTop row">
                                <div class="col-5 align-self-center mh-100">
                                    <a href="">
                                    <img class="img-fluid grayScaleTillHover" src="/Images/pdfIcon.png" alt="PDF Logo" />
                                </a>
                            </div>
                            <div class="col-7 h-100 mh-100">
                                <div class="projectBoxDescription mh-100">
                                    <h3 class="gradientText">PDF Splitter</h3>
                                    <p>Full-stack web app that allows for splitting PDFs in number of different ways. </p>
                                    <p>Makes use of file storage rather than writing and reading PDFs to a database.</p>
                                    <a class="grayLink" href="">Go see project  <span class="fas fa-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="projectBox">
                    <div class="projectBoxMedia onTop row">
                        <div class="col-5 align-self-center mh-100">
                            <a href="">
                            <img class="img-fluid circleImage padding10 grayScaleTillHover" src="/Images/weightTrackerIcon.jpg" alt="Plot Icon" />
                        </a>
                    </div>
                    <div class="col-7 h-100 mh-100">
                        <div class="projectBoxDescription mh-100">
                            <h3 class="gradientText">Body Weight Tracker</h3>
                            <p>Full-stack web app for tracking body weight and body fat percentage over time. Great for diet monitoriing.</p>
                            <p>Implements full CRUD functionality, as well as AJAX calls to RESTful Web APIs.</p>
                            <a class="grayLink" href="">Go see project  <span class="fas fa-arrow-right"></span></a>
                    </div>
                </div>
            </div>
                </div >

            </div >
        </div >


            <div id="skillsContainer" class="pageDividerBox grayBackground text-center">
                <div class="mh-10 gradientText">
                    <h1>S k i l l s    &amp;    T e c h n o l o g i e s</h1>
                </div>
                <div class="d-flex flex-row flex-wrap justify-content-center mh-90">
                    <div class="w-10 skillBox mh-75">
                        <img class="skillIcon img-fluid mh-80" src="/Images/csharpLogo.png"></img>
                            <div class="text-center text-break marginTop10">C#</div>
                    </div>
                    <div class="w-10 skillBox mh-75">
                            <img class="skillIcon img-fluid mh-80" src="/Images/aspnetMVCLogo.png"></img>
                            <div class="text-center text-break marginTop10">ASP.NET MVC</div>
                    </div>
                    <div class="w-10 skillBox mh-75">
                            <img class="skillIcon img-fluid mh-80" src="/Images/microsoftSqlServerIcon.png"></img>
                            <div class="text-center text-break marginTop10">SQL</div>
                    </div>
                    <div class="w-20 skillBox mh-75">
                            <img class="skillIcon img-fluid mh-80" src="/Images/entityFrameworkIcon.png"></img>
                            <div class="text-center text-break marginTop10">Entity Framework</div>
                    </div>
                    <div class="w-10 skillBox mh-75">
                            <img class="skillIcon img-fluid mh-80" src="/Images/javascriptShield.jpg"></img>
                            <div class="text-center text-break marginTop10">JavaScript</div>
                    </div>
                    <div class="w-10 skillBox mh-75">
                            <img class="skillIcon img-fluid mh-80" src="/Images/htmlShieldIcon.jpg"></img>
                            <div class="text-center text-break marginTop10">HTML</div>
                    </div>
                    <div class="w-10 skillBox mh-75">
                            <img class="skillIcon img-fluid mh-80" src="/Images/cssShieldIcon.png"></img>
                            <div class="text-center text-break marginTop10">CSS</div>
                    </div>
                    <div class="w-20 skillBox mh-75">
                            <img class="skillIcon img-fluid mh-80" src="/Images/visualStudioLogo.png"></img>
                            <div class="text-center text-break marginTop10">Visual Studio</div>
                    </div>
                </div>
            </div>

    </div >
        );
    }
}
