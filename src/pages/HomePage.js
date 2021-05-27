
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec porttitor sapien. 
                    Proin a odio quis dui mollis cursus. Maecenas erat ligula, consequat id posuere gravida, 
                    aliquam id eros. Donec pellentesque pharetra ipsum in dapibus. Morbi commodo, ligula quis dictum volutpat.
                </p>
                <div className="icons">
                    <Link className="icon-link" >
                        <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
                    </Link>
                    <Link className="icon-link">
                        <FontAwesomeIcon icon={faGithub} className="icon github" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;