import './App.css';
import {Link} from 'react-router-dom'



export default function Footer(){
    return(
        <footer className="d-flex flex-row ">
          
            <section id="info John Doe" className="col-md-3 ps-5 pt-4 pb-3 flex-row">

              <h5 className="fw-bolder">John Doe</h5>
              <p className="fw-semibold">40 rue Laure Diebold</p>
              <p className="fw-semibold">69009 Lyon, France</p>
              <p className="fw-semibold">Téléphone: 06 20 30 40 50</p>

              <div id="réseaux">
                <a target="_blank" rel="noreferrer" href="">
                  <i className="fa-brands fa-github fa-2xl text-dark"/>
                </a>
                <a className="text-decoration-none" target="_blank" rel="noreferrer" href="">
                  <i className="fa-brands fa-square-twitter fa-2xl ps-3 text-dark"/>
                </a>
                <a target="_blank" rel="noreferrer" href="">
                  <i className="fa-brands fa-linkedin fa-2xl ps-3 text-dark"/>
                </a>
            </div>

            </section>

            <section id="Liens utiles" className="col-md-3 position-relative">
              <div className="d-flex flex-column align-middle">
                <h5 className="pt-4 fw-bolder">Liens utiles</h5>
                  <Link id="liensfooter" to="/"><p className="fw-semibold"><i className=" fa-solid fa-chevron-right" style={{color: '#3a56d7'}}></i> Accueil</p></Link>
                  <Link id="liensfooter" to="blog"><p className="fw-semibold"><i className="fa-solid fa-chevron-right" style={{color: '#3a56d7'}}></i> A propos</p></Link>
                  <Link id="liensfooter" to="services"><p className="fw-semibold"><i className="fa-solid fa-chevron-right" style={{color: '#3a56d7'}}></i> Services</p></Link>
                  <Link id="liensfooter" to="/contact"><p className="fw-semibold"><i className="fa-solid fa-chevron-right" style={{color: '#3a56d7'}}></i>  Me contacter</p></Link>
                  <Link id="liensfooter" to="/Mentions"><p className="fw-semibold"><i className="fa-solid fa-chevron-right" style={{color: '#3a56d7'}}></i> Mentions légales</p></Link>
              </div>
            </section>

            <section id="dernieres realisations" className="col-md-3">
              <div className="d-flex flex-column align-middle">
                <h5 className="pt-4 fw-bolder">Mes dernière réalisations</h5>
                <Link id="liensfooter" to="/Realisations"><p className="fw-semibold"><i className="fa-solid fa-chevron-right" style={{color: '#3a56d7'}}></i> Fresh food</p></Link>
                <Link id="liensfooter" to="/Realisations"><p className="fw-semibold"><i className="fa-solid fa-chevron-right" style={{color: '#3a56d7'}}></i> Restaurant Akira</p></Link>
                <Link id="liensfooter" to="/Realisations"><p className="fw-semibold"><i className="fa-solid fa-chevron-right" style={{color: '#3a56d7'}}></i> Espace bien-être</p></Link>
              </div>
            </section>

            <section className="col-md-3 position-relative">
              <div className="d-flex flex-column align-middle">
                <h5 className="pt-4 fw-bolder">Mes dernier articles</h5>
                <Link id="liensfooter" to="/blog"><p className="fw-semibold" ><i className="fa-solid fa-chevron-right" style={{color: '#3a56d7'}}></i> Coder son site en HTML/CSS</p></Link>
                <Link id="liensfooter" to="/blog"><p className="fw-semibold"><i className="fa-solid fa-chevron-right" style={{color: '#3a56d7'}}></i> Vendre ses produits sur le web</p></Link>
                <Link id="liensfooter" to="/blog"><p className="fw-semibold"><i className="fa-solid fa-chevron-right" style={{color: '#3a56d7'}}></i> Se positionner sur Google</p></Link>

                
              </div>
            </section>
          
          
          <section className="copyright mb-3 w-100">
            
            <p><i className="fa-regular fa-copyright" /> Designed by John Doe</p>

          </section>


        </footer>
    )
}