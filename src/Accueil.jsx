import John from './img/john-doe-about.jpg'
import './Accueil.css';
import Competences from './Competence'




export default function Accueil(){
    return(
        
    <>
               
        <section id="bonjour">
            
                <h1 className="align-middle">Bonjour, je suis John Doe</h1>
                <p>Développeur web full stack</p>
                
                <a href="#about">
                        
                    <button type="button" className="btn btn-info">
                        En savoir plus
                    </button>
                </a>
              
        </section>
            
            
        <section className="m-5 bg-body-tertiary rounded  d-flex flex-row mb-3 justify-content-center shadow" id="about">
            <div className="ps-5 mt-3 w-50">
                <h2>A propos</h2>
                <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation
                        d'intégrateur-développeur web au CEF. Au cours de cette formation, j'ai pu acquérir des bases
                        solides pour travailler dans le domaine du développement web.
                </p>

                <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma 
                        formation de développeur web full stack.
                </p>

                <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte
                        les bonnes pratique du web.
                </p>

            </div>

            <div id="Compétences" className="pb-5 m-3">
                <img src={John} className="img-fluid rounded" alt="un developpeur code sur son pc"/>
                <h3>Mes compétences</h3>
                <Competences/>
      
            </div>
               
        </section>
        
        
    </>
            
           
           
        
    )
}