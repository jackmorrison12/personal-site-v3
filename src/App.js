import React, {Component} from "react";
import "./styles/index.css"

import styled from "styled-components";
import { animated } from "react-spring";

import GlobalStyle from './styles/global';

import Title from "./components/navbar/title";
import BurgerMenu from "./components/navbar/burgermenu";
import CollapseMenu from "./components/navbar/collapsemenu";

import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";

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
      <Router>
        <NavBar>
          <FlexContainer>
            <Title />
              <NavLinks>
                {
                  data.map(item => {
                    return (
                      <a><NavLink exact to={item.link} activeClassName="active_nav">{item.name} </NavLink></a>
                    );
                  }) 
                }
              </NavLinks>

            <BurgerWrapper>
              <BurgerMenu
                navbarState={this.state.navbarOpen} 
                handleNavbar={this.handleNavbar}
              />
            </BurgerWrapper>
          </FlexContainer>
        </NavBar> 
        <CollapseMenu 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
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
      <GlobalStyle />
   </>
   
    );
  }
}

export default App


const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;