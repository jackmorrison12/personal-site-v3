import React, {Component} from "react";
import "./styles/index.scss"

import GlobalStyle from './styles/global';


import { BrowserRouter as Router, Route, Switch, NavLink, Redirect} from "react-router-dom";

import data from "./data/navigation.json";

import Home from "./components/home";
import CV from "./components/cv";
import Experience from "./components/experience";
import Education from "./components/education";
import Projects from "./components/projects";
import Me from "./components/me";
import Map from "./components/map";

import Navbar from "./components/sub-components/navbar"

class App extends Component {
  
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    const pages = [(props) => <Home {...props} navbarState={this.state.navbarOpen} />, CV, Experience, Education, Projects, Me];
    return(
      <div class="layout">
      <Router>
        <Navbar />
        <div className="main">
          <Switch>
                {
                  data.map((item, i) => {
                    console.log(pages[i]);
                    return (
                      <Route path={item.link} exact render={pages[i]} />
                    );
                  }) 
                }

                {/* Temporary redirect whilst site is in beta 
                    Once out of beta, use this to automate deployment on git push 
                    https://www.freecodecamp.org/news/learn-how-to-automate-deployment-on-github-pages-with-travis-ci/ */}
                    
                <Route path="/personal-website" exact render={(props) => <Home {...props} navbarState={this.state.navbarOpen} />} />

                {/* Pages which are not in the nav bar (should eventually be exported to another js file and imported) */}

                <Route path="/map" exact component={Map} />
                
                {/* Redirects from old site */}
                <Route path="/about"><Redirect to="/me"/></Route>

                {/* 404 Redirect for everything else  */}
                <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </div>
      </Router>
      <GlobalStyle />
   </div>
   
    );
  }
}

export default App



