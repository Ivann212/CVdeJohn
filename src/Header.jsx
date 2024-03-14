import './App.css';
import {Link} from 'react-router-dom';



export default function Header() {
    return ( 
        <header className=" pb-4">
          <nav className="navbar navbar-expand-lg text-uppercase " id="mainNav">
            <div className="container">
                <Link className="navbar-brand pt-3" id="liensheader" to="/">John Doe</Link>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link pt-4 px-0 px-lg-3 rounded" id="liensheader" to="/">Accueil</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link pt-4 px-0 px-lg-3 rounded" id="liensheader" to="/services">Services</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link pt-4 px-0 px-lg-3 rounded" id="liensheader" to="/realisations">Réalisations</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link pt-4 px-0 px-lg-3 rounded" id="liensheader" to="/blog">blog</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link pt-4 px-0 px-lg-3 rounded" id="liensheader" to="/contact">Me contacter</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
         
          
        </header>
     );
}

