import './App.css';
import Github from './img/Github.png'
import Twitter from './img/Twitter.png'
import Linkedin from './img/Linkedin.png'
import {Routes, Route, Link} from 'react-router-dom'
import Realisations from './pages/Realisations';
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Mentions from './pages/Mentions'
import Services from './pages/Services'


export default function Footer(){
    return(
        <footer className="text-bg-success d-flex flex-row h-25">
          <section className="col-md-3 position-relative">
            <div className="ps-4 pt-3 pb-3">
                <p>John Doe</p>
                <p>8 impasse du python</p>
                <p>0827392827</p>
                <a target="_blank" rel="noreferrer" href="https://getbootstrap.com/docs/5.3/utilities/sizing/"><img src={Github} className="w-25" alt="github"/></a>
                <a target="_blank" rel="noreferrer" href="https://getbootstrap.com/docs/5.3/utilities/sizing/"><img src={Twitter} className="w-25" alt="twitter"/></a>
                <a target="_blank" rel="noreferrer" href="https://getbootstrap.com/docs/5.3/utilities/sizing/"><img src={Linkedin} className="w-25" alt="linkedin" /></a>
            </div>
          </section>

          <section className="col-md-3 position-relative">
            <div className="position-absolute top-50 start-50 translate-middle">
                <Link to="/contact"><p>Me contacter</p></Link>
                <Link to="services"><p>Services</p></Link>
                <Link to="/Mentions"><p>Mentions légales</p></Link>
            </div>
          </section>

          <section className="col-md-3 position-relative">
            <Link to="/Realisations"><p className="position-absolute top-50 start-50 translate-middle">Mes dernieres réalisations</p></Link>
          </section>

          <section className="col-md-3 position-relative">
            <Link to="/blog"><p className="position-absolute top-50 start-50 translate-middle">Articles de blog</p></Link>
          </section>
       


          <Routes>
            <Route path="/realisations" element={<Realisations/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/mentions" element={<Mentions/>}></Route>
          </Routes>
        </footer>
    )
}