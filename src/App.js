import React, {Component} from "react";
import "./styles/index.scss"

import GlobalStyle from './styles/global';

import ScrollToTop from 'react-router-scroll-top'


import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import data from "./data/navigation.json";
import projects from "./data/projects.json";


import Home from "./components/home";
import CV from "./components/cv";
import Experience from "./components/experience";
import Education from "./components/education";
import Projects from "./components/projects";
import Me from "./components/me";
import Map from "./components/map";
import ProjectPage from "./components/project-page"
import ErrorPage from "./components/404"

import Navbar from "./components/sub-components/navbar"

class App extends Component {
  
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    const pages = [Home, CV, Experience, Education, Projects, Me];
    return(
      <div class="layout">
      <Router>
        <ScrollToTop/>
        <Navbar />
        <div className="main">
          <Switch>
                {
                  data.map((item, i) => {
                    return (
                      <Route path={item.link} exact component={pages[i]} />
                    );
                  }) 
                }

                {
                  projects.map((item, i) => {
                    return (
                      <Route path={"/projects/" + (item.url)} exact render={(props) => <ProjectPage {...props} data={item} />} />
                    );
                  })
                }

                {/* Temporary redirect whilst site is in beta 
                    Once out of beta, use this to automate deployment on git push 
                    https://www.freecodecamp.org/news/learn-how-to-automate-deployment-on-github-pages-with-travis-ci/ */}
                    
                <Route path="/personal-website"><Redirect to="/"/></Route>
                {/* Pages which are not in the nav bar (should eventually be exported to another js file and imported) */}

                <Route path="/map" exact component={Map} />
                
                {/* Redirects from old site */}
                <Route path="/about"><Redirect to="/me"/></Route>
                <Route path="/music"><Redirect to="/projects/musictech"/></Route>
                <Route path="/python"><Redirect to="/projects/python"/></Route>

                {/* 404 Redirect for everything else  */}
                <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
      <GlobalStyle />
   </div>
   
    );
  }
}

export default App



