import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import About from './pages/about/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Resume from './pages/Resume';
import Opening from './pages/opening/Opening';
import ProjectDetail from './pages/projects/projectDetail/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <header className="App-header">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects/:title" component={ProjectDetail} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path={"/home"} component={Home} />
            <Route path={"/"} component={Opening} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
