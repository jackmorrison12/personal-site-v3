import React from "react";
import "./index.css"

import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import data from "./data/navigation.json";

import Home from "./components/home";
import CV from "./components/cv";
import Experience from "./components/experience";
import Education from "./components/education";
import Projects from "./components/projects";
import Me from "./components/me";

export default function App() {
  
  let pages = [Home, CV, Experience, Education, Projects, Me];

  return (
    <Router>
      <main>
        <nav>
          <ul>
            {
              data.map(item => {
                return (
                  <li><Link to={item.link}>{item.name}</Link></li>
                );
              }) 
            }
          </ul>
        </nav>
      <Switch>
        {
          data.map((item, i) => {
            console.log(pages[i]);
            return (
              <Route path={item.link} exact component={pages[i]} />
            );
          }) 
        }
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
      </main>
    </Router>
  );
}