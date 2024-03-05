import Fond from './img/hero-bg.jpg';
import Overlay from './img/noir.jpg'
import John from './img/john-doe-about.jpg'
import './Accueil.css';



export default function Accueil(){
    return(
        <div className="" id="Accueil">
            <a href="#about">
            <button type="button" className="btn btn-info position-absolute top-50 start-50 translate-middle position-absolutes">
                En savoir plus</button></a>
            
            {/*<img id="overlay" className="opacity-25 img-fluid position:absolute z-3" src={Overlay} alt='overlay' />*/}
            <div id="about">
                <img src={John} class="img-fluid"/>
            </div>
        
        </div>
    )
}