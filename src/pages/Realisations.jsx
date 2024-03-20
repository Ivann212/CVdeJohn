import freshfood from '../img/portfolio/fresh-food.jpg'
import akira from '../img/portfolio/restaurant-japonais.jpg'
import espacebienetre from '../img/portfolio/espace-bien-etre.jpg'
import './Pages.css'


export default function Realisations(){
    return(
        <>
            <div id="banner"/>
            
            <h1 className="pt-3 d-flex justify-content-center fw-bolder">Portfolio</h1>
            <div className=" d-flex justify-content-center">
                
                <p className="pb-2 border-bottom border-primary border-3 fw-semibold">Voici quelques-unes de mes créations</p>
            </div>
            
            <section  className="d-flex justify-content-evenly pb-5">
                <div class="card" style={{ width: "18rem"}}>
                    <img src={freshfood} class="card-img-top" alt="des legumes"/>
                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title fw-bolder">Fresh food</h5>
                        <p class="card-text fw-semibold text-center">Réalisation d'un site avec commande en ligne.</p>
                        <a href="#" id="btncard" class="btn btn-primary fw-semibold">Voir</a>
                    </div>
                    <p id="bottomcard" className="d-flex justify-content-center mb-0 fw-semibold border-top">Site réalisé avec PHP et MYSQL</p>
                </div>
                <div class="card" style={{ width: "18rem"}}>
                    <img src={akira} class="card-img-top" alt="des sushis"/>
                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title fw-bolder">Restaurant Akira</h5>
                        <p class="card-text fw-semibold">Réalisation d'un site vitrine.</p>
                        <a href="#" id="btncard" class="btn btn-primary fw-semibold">Voir</a>
                    </div>
                    <p id="bottomcard" className="d-flex justify-content-center mb-0 fw-semibold border-top">Site réalisé avec WordPress</p>
                </div>
                <div class="card" style={{ width: "18rem"}}>
                    <img src={espacebienetre} class="card-img-top" alt="des pierres une tête et une fleur rose"/>
                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title fw-bolder">Espace bien-être</h5>
                        <p class="card-text fw-semibold text-center">Réalisation d'un site vitrine pour un patricien de bien-être</p>
                        <a href="#" id="btncard" class="btn btn-primary fw-semibold">Voir</a>
                    </div>
                    <p id="bottomcard" className="d-flex justify-content-center mb-0 fw-semibold border-top">Site réalisé en HTML/CSS</p>
                    
                </div>
            </section>
          
            
        </>
    )
}