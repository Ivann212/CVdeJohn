


export default function Mentions(){
    return(
        <>
            <meta name="robot" content="noindex"/>
            <div className="accordion p-5" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Editeur du site
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <h3>John Doe</h3>
                        <p><i className="fa-solid fa-location-dot"></i> 40 Rue Laure Diebold</p>
                        <p>69009 Lyon, France</p>
                        <p className="text-primary"><i className="fa-solid fa-mobile-screen-button text-dark"></i> 06 20 30 40 50</p>
                        <p className="text-primary"><i className="fa-solid fa-envelope text-dark"></i> john.doe@gmail.com</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Hébergeur
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <h3>Always Data</h3>
                        <p>91 rue du Faubourg Saint Honoré</p>
                        <p>75008 Paris</p>
                        <p className="text-primary"><i className="fa-solid fa-globe text-black"></i> www.alwaysdata.com</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Crédits
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                       <h3>Crédits</h3>
                       <p>Site développé par John Doe, étudiant du CEF.</p>
                       <p>Les images libres de droit sont issues du site <p className="text-primary">Pixabay</p></p>
                    </div>
                    </div>
                </div>
            </div> 
        </>
    )
}