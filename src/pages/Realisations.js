import EspaceBienEtre from '../img/services-bg.jpg'

export default function Realisations(){
    return(
        <div>
            <div className="card d-flex" >
                <img className="card-img-top" src={EspaceBienEtre} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Espace bien-être</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
            
        </div>
    )
}