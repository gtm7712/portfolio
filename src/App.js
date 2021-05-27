
import './App.scss'
import { Switch, Route } from 'react-router-dom' 
import NavBar from './components/NavBar'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import { useState } from 'react'

function App() {
    const [navToggle, setNavToggle] = useState(false);

    const navClick = () => {
        setNavToggle(!navToggle);
    }

    return (
        <div className="App">
            <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
                <NavBar />
            </div>
            <div className="nav-button" onClick={navClick}>
                <div className="lines-1"></div>
                <div className="lines-2"></div>
                <div className="lines-3"></div>
            </div>
            <div className="main-content">
                <div className="content">
                    <Switch>
                        <Route path="/" exact>
                            <HomePage />
                        </Route>
                        <Route path="/about" exact>
                            <AboutPage />
                        </Route>
                        <Route path="/portfolio" exact>
                            <PortfolioPage />
                        </Route>
                        <Route path="/contact" exact>
                            <ContactPage />
                        </Route>
                        <Route path="/blog" exact>
                            <BlogPage />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;