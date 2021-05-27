
import React from 'react'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I'm 
                    <span> Giovanni Melchionne.</span>
                </h1>
                <p className="h-sub-text">
                    I'm a 21-year-old Software Engineering and Japanese double major at 
                    Rochester Institute of Technology who loves finding new ways to
                    merge these two interests.
                </p>
                <div className="icons">
                    <Link className="icon-link" >
                        <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" onClick={() => window.open("https://linkedin.com/in/giom", "_blank")} />
                    </Link>
                    <Link className="icon-link">
                        <FontAwesomeIcon icon={faGithub} className="icon github" onClick={() => window.open("https://github.com/9vult", "_blank")} />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;