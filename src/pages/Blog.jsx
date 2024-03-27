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
            
                <section className="row pt-5 text-center">
                    <article className="col-md-6 col-lg-4 mb-5">
                        <div className="card" style={{ width: "18rem"}}>
                            <img src={coder} className="card-img-top" alt="des pierres une tête et une fleur rose"/>
                            <div className="card-body">
                                <h5 className="card-title fw-bolder">Coder son site en HTML/CSS</h5>
                                <p className="card-text fw-semibold">Apprendre a coder son site en HTML et CSS</p>
                                <a href="#" id="btncard" className="btn btn-primary fw-semibold">Lire la suite</a>
                            </div>
                            <p id="bottomcard" className="d-flex justify-content-center mb-0 fw-semibold border-top">Publié le 22 août 2022</p>
                                    
                        </div>
                    </article>
                    <article className="col-md-6 col-lg-4 mb-5">
                        <div className="card " style={{ width: "18rem"}}>
                            <img src={croissance} className="card-img-top" alt="des pierres une tête et une fleur rose"/>
                            <div className="card-body ">
                                <h5 className="card-title fw-bolder">Vendre ses produits sur le web</h5>
                                <p className="card-text fw-semibold">Apprendre à vendre ses produits sur internet</p>
                                <a href="#" id="btncard" className="btn btn-primary fw-semibold">Lire la suite</a>
                            </div>
                            <p id="bottomcard" className="d-flex justify-content-center mb-0 fw-semibold border-top">Publié le 22 août 2022</p>
                                
                        </div>
                    </article>
                    <article className="col-md-6 col-lg-4 mb-5">
                        <div className="card " style={{ width: "18rem"}}>
                            <img src={google} className="card-img-top" alt="des pierres une tête et une fleur rose"/>
                            <div className="card-body ">
                                <h5 className="card-title fw-bolder">Se positionner sur Google</h5>
                                <p className="card-text fw-semibold">Apprendre à se positionner sur Google</p>
                                <a href="#" id="btncard" className="btn btn-primary fw-semibold">Lire la suite</a>
                            </div>
                            <p id="bottomcard" className="d-flex justify-content-center mb-0 fw-semibold border-top">Publié le 22 août 2022</p>
                                    
                        </div>
                    </article>
                    <article className="col-md-6 col-lg-4 mb-5">
                    
                        <div className="card" style={{ width: "18rem"}}>
                            <img src={screens} className="card-img-top" alt="des pierres une tête et une fleur rose"/>
                            <div className="card-body ">
                                <h5 className="card-title fw-bolder">Coder en responsive design</h5>
                                <p className="card-text fw-semibold">Apprendre à coder pour tout type d'écran</p>
                                <a href="#" id="btncard" className="btn btn-primary fw-semibold">Lire la suite</a>
                            </div>
                            <p id="bottomcard" className="d-flex justify-content-center mb-0 fw-semibold border-top">Publié le 22 août 2022</p>
                                
                        </div>
                    </article>
                    <article className="col-md-6 col-lg-4 mb-5">
                        <div className="card" style={{ width: "18rem"}}>
                            <img src={seo} className="card-img-top" alt="des pierres une tête et une fleur rose"/>
                            <div className="card-body ">
                                <h5 className="card-title fw-bolder">Technique de référencement</h5>
                                <p className="card-text fw-semibold">Apprendre le référencement</p>
                                <a href="#" id="btncard" className="btn btn-primary fw-semibold">Lire la suite</a>
                            </div>
                            <p id="bottomcard" className="d-flex justify-content-center mb-0 fw-semibold border-top">Publié le 22 août 2022</p>
                                    
                        </div>
                    </article>
                    <article className="col-md-6 col-lg-4 mb-5">
                        <div className="card" style={{ width: "18rem"}}>
                            <img src={technos} className="card-img-top" alt="des pierres une tête et une fleur rose"/>
                            <div className="card-body ">
                                <h5 className="card-title fw-bolder">Apprendre à coder</h5>
                                <p className="card-text fw-semibold">Apprendre à coder</p>
                                <a href="#" id="btncard" className="btn btn-primary fw-semibold ">Lire la suite</a>
                            </div>
                            <p id="bottomcard" className="d-flex justify-content-center mb-0 fw-semibold border-top">Publié le 22 août 2022</p>
                                
                        </div>
                    </article>

                </section>
            
                
             
            
        </>
    )
}