import coder from '../img/blog/coder.jpg'
import croissance from '../img/blog/croissance.jpg'
import google from '../img/blog/google.jpg'
import screens from '../img/blog/screens.jpg'
import seo from '../img/blog/seo.jpg'
import technos from '../img/blog/technos.png'
import '../pages/Pages.css'



export default function Blog(){
    return(
        <>
            <div id="banner"/>
            <section className="articles">
                <section className="row pt-5">
                    <article class="col-md-6 col-lg-4 mb-5">
                        <div class="card" style={{ width: "18rem"}}>
                            <img src={coder} class="card-img-top" alt="des pierres une tête et une fleur rose"/>
                            <div class="card-body">
                                <h5 class="card-title fw-bolder">Espace bien-être</h5>
                                <p class="card-text fw-semibold">Réalisation d'un site vitrine pour un patricien de bien-être</p>
                                <a href="#" id="btncard" class="btn btn-primary fw-semibold">Lire la suite</a>
                            </div>
                            <p id="bottomcard" className="d-flex justify-content-center mb-0 fw-semibold border-top">Site réalisé en HTML/CSS</p>
                                    
                        </div>
                    </article>
                    <article class="col-md-6 col-lg-4 mb-5">
                        <div class="card " style={{ width: "18rem"}}>
                            <img src={croissance} class="card-img-top" alt="des pierres une tête et une fleur rose"/>
                            <div class="card-body ">
                                <h5 class="card-title fw-bolder">Espace bien-être</h5>
                                <p class="card-text fw-semibold">Réalisation d'un site vitrine pour un patricien de bien-être</p>
                                <a href="#" id="btncard" class="btn btn-primary fw-semibold">Lire la suite</a>
                            </div>
                            <p id="bottomcard" className="d-flex justify-content-center mb-0 fw-semibold border-top">Site réalisé en HTML/CSS</p>
                                
                        </div>
                    </article>
                    <article class="col-md-6 col-lg-4 mb-5">
                        <div class="card " style={{ width: "18rem"}}>
                            <img src={google} class="card-img-top" alt="des pierres une tête et une fleur rose"/>
                            <div class="card-body ">
                                <h5 class="card-title fw-bolder">Espace bien-être</h5>
                                <p class="card-text fw-semibold">Réalisation d'un site vitrine pour un patricien de bien-être</p>
                                <a href="#" id="btncard" class="btn btn-primary fw-semibold">Lire la suite</a>
                            </div>
                            <p id="bottomcard" className="d-flex justify-content-center mb-0 fw-semibold border-top">Site réalisé en HTML/CSS</p>
                                    
                        </div>
                    </article>
                    <article class="col-md-6 col-lg-4 mb-5">
                    
                        <div class="card" style={{ width: "18rem"}}>
                            <img src={screens} class="card-img-top" alt="des pierres une tête et une fleur rose"/>
                            <div class="card-body ">
                                <h5 class="card-title fw-bolder">Espace bien-être</h5>
                                <p class="card-text fw-semibold">Réalisation d'un site vitrine pour un patricien de bien-être</p>
                                <a href="#" id="btncard" class="btn btn-primary fw-semibold">Lire la suite</a>
                            </div>
                            <p id="bottomcard" className="d-flex justify-content-center mb-0 fw-semibold border-top">Site réalisé en HTML/CSS</p>
                                
                        </div>
                    </article>
                    <article class="col-md-6 col-lg-4 mb-5">
                        <div class="card" style={{ width: "18rem"}}>
                            <img src={seo} class="card-img-top" alt="des pierres une tête et une fleur rose"/>
                            <div class="card-body ">
                                <h5 class="card-title fw-bolder">Espace bien-être</h5>
                                <p class="card-text fw-semibold">Réalisation d'un site vitrine pour un patricien de bien-être</p>
                                <a href="#" id="btncard" class="btn btn-primary fw-semibold">Lire la suite</a>
                            </div>
                            <p id="bottomcard" className="d-flex justify-content-center mb-0 fw-semibold border-top">Site réalisé en HTML/CSS</p>
                                    
                        </div>
                    </article>
                    <article class="col-md-6 col-lg-4 mb-5">
                        <div class="card" style={{ width: "18rem"}}>
                            <img src={technos} class="card-img-top" alt="des pierres une tête et une fleur rose"/>
                            <div class="card-body ">
                                <h5 class="card-title fw-bolder">Espace bien-être</h5>
                                <p class="card-text fw-semibold">Réalisation d'un site vitrine pour un patricien de bien-être</p>
                                <a href="#" id="btncard" class="btn btn-primary fw-semibold">Lire la suite</a>
                            </div>
                            <p id="bottomcard" className="d-flex justify-content-center mb-0 fw-semibold border-top">Site réalisé en HTML/CSS</p>
                                
                        </div>
                    </article>

                </section>
            </section>
                
             
            
        </>
    )
}