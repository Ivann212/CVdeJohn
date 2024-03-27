import freshfood from '../img/portfolio/fresh-food.jpg'
import akira from '../img/portfolio/restaurant-japonais.jpg'
import espacebienetre from '../img/portfolio/espace-bien-etre.jpg'
import './Pages.css'


export default function Realisations(){
    return(
        <>
            <div id="banner"/>
            
            <h1 className="pt-3 d-flex justify-content-center ">Portfolio</h1>
            <div className=" d-flex justify-content-center">
                
                <p className="pb-2 border-bottom border-primary border-3 ">Voici quelques-unes de mes créations</p>
            </div>
            
            <section  className="row d-flex justify-content-evenly  pb-5">
                <div className="card col-md-6 col-lg-4" style={{ width: "18rem"}}>
                    <img src={freshfood} id="imgcreations" className="card-img-top" alt="des legumes"/>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 className="card-title ">Fresh food</h5>
                        <p className="card-text  text-center">Réalisation d'un site avec commande en ligne.</p>
                        <a href="#" id="btncard" className="btn btn-outline-primary ">Voir</a>
                    </div>
                    <p id="bottomcard" className="d-flex justify-content-center mb-0  border-top">Site réalisé avec PHP et MYSQL</p>
                </div>
                <div className="card col-md-6 col-lg-4" style={{ width: "18rem"}}>
                    <img src={akira} id="imgcreations" className="card-img-top" alt="des sushis"/>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 className="card-title ">Restaurant Akira</h5>
                        <p className="card-text ">Réalisation d'un site vitrine.</p>
                        <a href="#" id="btncard" className="btn btn-outline-primary ">Voir</a>
                    </div>
                    <p id="bottomcard" className="d-flex justify-content-center mb-0  border-top">Site réalisé avec WordPress</p>
                </div>
                <div className="card col-md-6 col-lg-4" style={{ width: "18rem"}}>
                    <img src={espacebienetre} id="imgcreations" className="card-img-top" alt="des pierres une tête et une fleur rose"/>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 className="card-title ">Espace bien-être</h5>
                        <p className="card-text  text-center">Réalisation d'un site vitrine pour un patricien de bien-être</p>
                        <a href="#" id="btncard" className="btn btn-outline-primary ">Voir</a>
                    </div>
                    <p id="bottomcard" className="d-flex justify-content-center mb-0  border-top">Site réalisé en HTML/CSS</p>
                    
                </div>
            </section>
          
            
        </>
    )
}