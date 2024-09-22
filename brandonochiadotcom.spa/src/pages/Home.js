import React, { Component } from 'react';
import Typed from 'typed.js'
import SkillTile from '../components/SkillTile';
import ProjectTile from '../components/ProjectTile';
import ResumeTile from '../components/ResumeTile';
import AboutMeSection from '../components/AboutSection';

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
                        <AboutMeSection />
                        <ResumeTile />
                    </div>
                </div>


                <div id="projectsContainer" className="pageDividerBox blackBackground">

                    <div id="projectsTextContainer" className="gradientText minWidth300 w-100">
                        <h1 className="text-center">P r o j e c t s</h1>
                    </div>

                    <div className="d-flex flex-row flex-wrap justify-content-around h-60 w-100">
                        <ProjectTile
                            title="PDF Splitter"
                            p1="Full-stack web app that allows for splitting PDFs in number of different ways."
                            p2="Makes use of file storage rather than writing and reading PDFs to a database."
                            src="/Images/pdfIcon.png"
                            altText="PDF Logo"
                        />
                        <ProjectTile
                            title="Body Weight Tracker"
                            p1="Full-stack web app for tracking body weight and body fat percentage over time. Great for diet monitoriing."
                            p2="Implements full CRUD functionality, as well as AJAX calls to RESTful Web APIs."
                            src="/Images/weightTrackerIcon.jpg"
                            altText="Plot Icon"
                            isCircleImage={true}
                        />
                    </div >
                </div >


                <div id="skillsContainer" className="pageDividerBox grayBackground text-center">
                    <div className="mh-10 gradientText">
                        <h1>S k i l l s    &amp;    T e c h n o l o g i e s</h1>
                    </div>
                    <div className="d-flex flex-row flex-wrap justify-content-center mh-90">
                        <SkillTile text="Web API" src="/Images/aspNetCoreLogo.png" width={10} />
                        <SkillTile text="Azure" src="/Images/azureLogo.png" width={15} />
                        <SkillTile text="SQL" src="/Images/microsoftSqlServerIcon.png" width={10} />
                        <SkillTile text="Entity Framework Core" src="/Images/entityFrameworkIcon.png" width={20} />
                        <SkillTile text="React.js" src="/Images/reactLogo.png" width={10} />
                        <SkillTile text="Visual Studio" src="/Images/visualStudioLogo.png" width={20} />
                        <SkillTile text="Unit Testing" src="/Images/unitTestingIcon.png" width={10} />
                    </div>
                    <br /><br />
                </div>

            </div >
        );
    }
}