import './App.css';
import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';


    


export default function Header() {
    const [activeSection, setActiveSection] = useState('');
  
    useEffect(() => {
      function handleScroll() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            setActiveSection(section.id);
          }
        });
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return ( 
        <header>
          <nav className="navbar navbar-expand-lg text-uppercase " id="mainNav">
            <div className="container">
                <Link className="navbar-brand text-white" to="/">John Doe</Link>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1" ><Link className="nav-link pt-3 px-0 px-lg-3 rounded fw-medium" id="liensheader" to="/">Accueil</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link pt-3 px-0 px-lg-3 rounded fw-medium" id="liensheader" to="/services">Services</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link pt-3 px-0 px-lg-3 rounded " id="liensheader" to="/realisations">Réalisations</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link pt-3 px-0 px-lg-3 rounded " id="liensheader" to="/blog">blog</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link pt-3 px-0 px-lg-3 rounded " id="liensheader" to="/contact">Me contacter</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
         
          
        </header>
     );
}

