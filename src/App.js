import React, {Component} from "react";
import "./styles/index.css"

import Navbar from "./components/navbar/navbar";
import GlobalStyle from './styles/global';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import data from "./data/navigation.json";

import Home from "./components/home";
import CV from "./components/cv";
import Experience from "./components/experience";
import Education from "./components/education";
import Projects from "./components/projects";
import Me from "./components/me";

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
      <>
        <Navbar 
              navbarState={this.state.navbarOpen} 
              handleNavbar={this.handleNavbar}
            />
        <GlobalStyle />
      
      <Router>
        <div class="main">
          <Switch>
            {
              data.map((item, i) => {
                console.log(pages[i]);
                return (
                  <Route path={item.link} exact component={pages[i]} />
                );
              }) 
            }

            {/* Temporary redirect whilst site is in beta 
                Once out of beta, use this to automate deployment on git push 
                https://www.freecodecamp.org/news/learn-how-to-automate-deployment-on-github-pages-with-travis-ci/ */}
                
            <Route path="/personal-website" exact component= {Home} />
            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </div>
      </Router>
      </>
    );
  }
}

export default App