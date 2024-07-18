import { aboutResources } from "../Resources/About";
import {getLang} from "../lib"

function About(){
    const lang = getLang()

    document.title = "About us"

    return(
        <div className="page">
            <section className="mx-50">
                <h1>{aboutResources[lang].Title}</h1>
                <p>{aboutResources[lang].Description}</p>
            </section>
            <hr />

            <div className="page-item">
                <section className="txt-holder child-item">
                    <h3>{aboutResources[lang].Text03}</h3>
                    <p>{aboutResources[lang].Text04}</p>
                </section>
                <div className="img-holder child-item">
                    <img src="/images/about.jpg" alt="about" />
                </div>
            </div>

            <div className="page-item reverse">
                <section className="txt-holder child-item">
                    <h3>{aboutResources[lang].Text05}</h3>
                    <p>{aboutResources[lang].Text06}</p>
                    <p>{aboutResources[lang].Text07}</p>
                </section>
                <div className="img-holder child-item">
                    <img src="/images/about-02.jfif" alt="bill gates" />
                </div>
            </div>
        </div>
    )
}


export default About;