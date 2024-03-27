import contactBg from '../img/contact-bg.jpg'
import maps from '../img/mapss.PNG'

export default function Contact(){
    return(
        <div className="Contactbg pt-5" style={{backgroundImage: `url(${contactBg})`,
            backgroundSize: "cover",
            
        
        }}>
            
            <div className="Contact rounded col-md-6 col-lg-10">
                <h2 className="p-3 text-capitalize">me contacter</h2>
                
                <p className="">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                <div id="soulignage" className="border-bottom border-primary border-4 rounded d-flex "/>
                <section className="row  container">
                    <div id="formulaire" className="pt-4 ps-4 ">
                        <h3 className="border-bottom border-primary border-2 text-start">Formulaire de contact</h3>
                        <form >
                            <input type="text" className="form-control mb-3"  placeholder="Votre nom"/>
                            <input type="email" className="form-control mb-3"  placeholder="Votre adresse mail"/>
                            <input type="tel" className="form-control mb-3"  placeholder="Votre numéro de téléphone"/>
                            <input type="text" className="form-control mb-3"  placeholder="Sujet"/>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Votre message" rows="3"/>
                            <button type="submit" className="btn btn-primary mt-3 mb-3">envoyer</button>
                        </form>
                    </div>
                    <div id="coordonnées" className="pt-4 ms-3 col-md-6 col-lg-4">
                        <h3 className="border-bottom  border-primary border-2 text-start">Mes coordonnées</h3>
                        <p className="text-start"><i className="fa-solid fa-location-dot"></i> 40 Rue Laure Diebold, 69009 Lyon, France</p>
                        <p className="text-start"><i className="fa-solid fa-mobile-screen-button"></i> 06 20 30 40 50</p>
                        <img src={maps} alt="adresse sur maps"/>

                    </div>
                </section>
            </div>
           
            
        </div>
    )
}
