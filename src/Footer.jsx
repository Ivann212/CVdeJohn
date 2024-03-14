import './App.css';
import {Link} from 'react-router-dom'



export default function Footer(){
    return(
        <footer className="d-flex flex-row ">
          
            <section className="col-md-3 ps-5 pt-3 pb-3 flex-row">

              <h5>John Doe</h5>
              <p>8 impasse du python</p>
              <p>0827392827</p>

              <div id="réseaux">
                <a target="_blank" rel="noreferrer" href="">
                  <i className="fa-brands fa-github fa-2xl"/>
                </a>
                <a className="text-decoration-none" target="_blank" rel="noreferrer" href="">
                  <i className="fa-brands fa-square-twitter fa-2xl ps-3"/>
                </a>
                <a target="_blank" rel="noreferrer" href="">
                  <i className="fa-brands fa-linkedin fa-2xl ps-3"/>
                </a>
            </div>

            </section>

            <section className="col-md-3 position-relative">
              <div className="position-absolute top-50 start-50 translate-middle ">
                <h5>Liens utiles</h5>
                  <Link id="liensfooter" to="/contact"><p>Me contacter</p></Link>
                  <Link id="liensfooter" to="services"><p>Services</p></Link>
                  <Link id="liensfooter" to="/Mentions"><p>Mentions légales</p></Link>
              </div>
            </section>

            <section className="col-md-3 position-relative">
            <Link id="liensfooter" to="/Realisations"><p className="position-absolute top-50 start-50 translate-middle">Mes dernieres réalisations</p></Link>
            </section>

            <section className="col-md-3 position-relative">
            <Link id="liensfooter" to="/blog"><p className="position-absolute top-50 start-50 translate-middle">Articles de blog</p></Link>
            </section>
          
          
          <section className="copyright  mb-3 w-100">
            
            <p className="d-flex justify-content-center pt-3"><i class="fa-regular fa-copyright" /> Designed by John Doe</p>

          </section>


        </footer>
    )
}