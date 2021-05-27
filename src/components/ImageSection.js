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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec porttitor sapien. 
                    Proin a odio quis dui mollis cursus. Maecenas erat ligula, consequat id posuere gravida, 
                    aliquam id eros. Donec pellentesque pharetra ipsum in dapibus. Morbi commodo, ligula quis dictum volutpat.
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
                <button className="btn">View Resume</button>
            </div>
        </div>
    )
}

export default ImageSection
