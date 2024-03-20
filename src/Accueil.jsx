import John from './img/john-doe-about.jpg'
import './Accueil.css';
import Competences from './Competence'




export default function Accueil(){
    return(
        
    <>
               
        <section id="bonjour">
            
                <h1 className="align-middle fw-bolder">Bonjour, je suis John Doe</h1>
                <p>Développeur web full stack</p>
                
                <a href="#about">
                        
                    <button type="button" className="btn btn-info">
                        En savoir plus
                    </button>
                </a>
              
        </section>
            
            
        <section className="m-5 bg-body-tertiary rounded  d-flex flex-row mb-3 justify-content-center shadow" id="about">
            <div className="ps-5 mt-3 w-50">
                <h2 className="fw-bolder pb-3 border-bottom border-primary border-2">A propos</h2>
                <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation
                        d'<strong>intégrateur-développeur</strong> web au CEF. Au cours de cette formation, j'ai pu acquérir des bases
                        solides pour travailler dans le domaine du <strong>développement web</strong>.
                </p>

                <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma 
                        formation de <strong>développeur web full stack</strong>.
                </p>

                <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte
                        les bonnes pratique du web.
                </p>

            </div>

            <div id="Compétences" className="pb-5 m-3">
                <img src={John} className="img-fluid rounded" alt="un developpeur code sur son pc"/>
                <h3 className="fw-bolder pt-2">Mes compétences</h3>
                <Competences/>
      
            </div>
               
        </section>
        
        
    </>
            
           
           
        
    )
}