

export default function Contact(){
    return(
        <div className="Contact">
            <div id="formulaire" className="">
                <form action="/ma-page-de-traitement" method="post">
                    <ul>
                        <li>
                            <label for="name">Nom&nbsp;:</label>
                            <input type="text" id="name" name="user_name" />
                        </li>
                        <li>
                            <label for="mail">E-mail&nbsp;:</label>
                            <input type="email" id="mail" name="user_mail" />
                        </li>
                        <li>
                            <label for="phone">Numéro de téléphone&nbsp;:</label>
                            <input type="phone" id="phone" name="user_phone" />
                        </li>
                        <li>
                            <label for="subject">Sujet&nbsp;:</label>
                            <textarea id="subject" name="subject"></textarea>
                        </li>
                        <li>
                            <label for="msg">Message&nbsp;:</label>
                            <textarea id="msg" name="user_message"></textarea>
                        </li>
                    </ul>
                </form>
            </div>
            
        </div>
    )
}