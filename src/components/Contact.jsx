
import { contactResources } from "../Resources/Contact";
import {getLang} from "../lib"

function Contact(){
    const lang = getLang()

    document.title = "Contact us"

    return(
        <div className="page">
            <section className="mx-50">
                <h1>{contactResources[lang].Text01}</h1>
                <p> {contactResources[lang].Text02}</p>
            </section>

            <hr />
            <div className="page-item">
                    <div className="txt-holder child-item">
                        <form action="#" className="contact-form">
                            <div className="bold">
                                <label htmlFor="name">{contactResources[lang].Text03}</label>
                            </div>
                            <input type="text" id="name" name="name" required/>

                            <div className="lbl">
                                <label htmlFor="subject">{contactResources[lang].Text04}</label>
                            </div>
                            <input type="text" id="subject" name="subject" required/>

                            <div className="lbl">
                                <label htmlFor="email">{contactResources[lang].Text05}</label>
                            </div>
                            <input type="email" id="email" name="email" required/>

                            <div className="lbl">
                                <label htmlFor="message">{contactResources[lang].Text06}</label>
                            </div>
                            <textarea name="message" id="message"></textarea>

                            <div>
                                <button type="submit">{contactResources[lang].Text07}</button>
                            </div>
                        </form>
                    </div>
                    <div className="img-holder child-item">
                        <img src="/images/contact-page.png" alt="contact page" />
                    </div>
            </div>
        </div>
    )
}


export default Contact;