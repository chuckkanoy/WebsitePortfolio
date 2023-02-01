import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';

import './App.css';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Resume from './pages/resume/Resume';
import Opening from './pages/opening/Opening';
import BlogDetail from './pages/blog/BlogDetail/BlogDetail';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
          <Header />
          <Routes className = "mainBody">
            <Route path="/about" element={<About />} />
            <Route path="/blog/:blog" element={<BlogDetail />}/>
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/"} element={<Opening />} />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
