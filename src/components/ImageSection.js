import React from 'react'
import about from '../img/about.png';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am <span>Giovanni Melchionne</span></h4>
                <p className="about-text">
                    <p>
                    I'm a 21-year-old Software Engineering and Japanese double major at
                    Rochester Institute of Technology in Rochester, NY.
                    </p>                    
                    <p>
                        During my time at RIT, I have participated in numerous team projects,
                        and have garnered practical experience covering the entirety of the
                        software development process, from project conception to release.
                    </p>
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Languages</p>
                        <p>Frameworks</p>
                        <p>Environments</p>
                        <p>Methodologies</p>
                    </div>
                    <div className="right-section">
                        <p>: Java, C#, Python, JavaScript, HTML, C, SQL</p>
                        <p>: Node.js, React.js, PostgreSQL, Reactstrap, Vue.js</p>
                        <p>: VSCode, Visual Studio, Eclipse, IntelliJ, PyCharm, Vim</p>
                        <p>: Agile (Scrum), Version Control (Git), Unit Testing, Continuous Integration</p>
                    </div>
                </div>
                <button className="btn" onClick={() => alert("Soon.")}>View Resume</button>
            </div>
        </div>
    )
}

export default ImageSection
