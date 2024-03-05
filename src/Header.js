import Logo from './img/apple-touch-icon.png';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Realisations from './pages/Realisations';
import Blog from './pages/Blog'
import Contact from './pages/Contact'

export default function Header() {
    return ( 
        <header className=" pt-5 d-sm-flex">
          <nav className="navbar navbar-expand-lg text-bg-secondary text-light text-uppercase fixed-top" id="mainNav">
            <div className="container">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
            </a>
              <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/Realisations">Mes réalisations</Link>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/Blog">Blog</Link>
                  </li>
                  <li className="nav-item mx-0 mx-lg-1">
                    <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/Contact">Me contacter</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/realisation" element={<Realisations/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
        </header>
     );
}

