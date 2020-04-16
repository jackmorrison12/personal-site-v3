import React from "react";
import "./index.css"

import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Home from "./components/home";
import CV from "./components/cv";
import Experience from "./components/experience";
import Education from "./components/education";
import Projects from "./components/projects";
import Me from "./components/me";

export default function App() {
  
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cv">Interactive CV</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/me">Me</Link></li>
          </ul>
        </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cv"  component={CV} />
        <Route path="/experience"  component={Experience} />
        <Route path="/education"  component={Education} />
        <Route path="/projects"  component={Projects} />
        <Route path="/me"  component={Me} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
      </main>
    </Router>
  );
}