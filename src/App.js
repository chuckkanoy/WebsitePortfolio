import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Resume from './pages/resume/Resume';
import Opening from './pages/opening/Opening';
import Footer from './components/footer/Footer';
import BlogDetail from './pages/blog/BlogDetail/BlogDetail';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/blog/:blog" component={BlogDetail}/>
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path={"/home"} component={Home} />
            <Route path={"/"} component={Opening} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
