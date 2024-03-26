


export default function Services(){
    return(
        <>
            <div id="banner"/>        
            <h1 className="d-flex justify-content-center pt-4 text-capitalize">mon offre de services</h1>
            <div className="d-flex justify-content-center">   
                
                <p className="border-bottom border-primary border-4 ">Voici les prestations sur lesquelles je peux intervenir.</p>
                
            </div>
            <section className="d-flex justify-content-center row p-5">
                <div id="service" className="bg-white mx-3 px-3 pt-4  text-center col-md-6 col-lg-4  rounded">
                    <i class="fa-solid fa-display fa-2xl text-primary pt-5 pb-4"/>
                    <h3 className="text-capitalize">ux design</h3>
                    <p>L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur.
                    Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                </div>
                <div id="service" className="bg-white mx-3 px-3 pt-4 text-center col-md-6 col-lg-4  rounded">
                    <i class="fa-solid fa-file-code fa-2xl text-primary pt-5 pb-4"/>
                    <h3 className="text-capitalize">développement web</h3>
                    <p>Le <strong>développement de sites web</strong> repose sur l'utilisation des langages
                    HTML, CSS, JavaScript et PHP.</p>
                </div>
                <div id="service" className="bg-white mx-3 px-3 pt-4 text-center col-md-6 col-lg-4  rounded">
                    <i class="fa-solid fa-magnifying-glass-dollar fa-2xl text-primary pt-5 pb-4"/>
                    <h3 className="text-capitalize">référencement</h3>
                    <p>Le <strong>référecement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre
                    des techniques en oeuvre pour<i>améliorer sa position</i> dans les résultats des moteurs de recherche. </p>
                </div>
            </section>
            
        </>
    )
}