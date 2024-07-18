
import { servicesResources } from "../Resources/Services";
import { getLang } from "../lib"


function Services() {
    const lang = getLang()

    document.title = "Services"

    return (
        <div className="page">
            <div className="mx-50">
                <h1 className="mt-110"> {servicesResources[lang].Text01}</h1>

                <p>{servicesResources[lang].Text02}</p>
            </div>
            <hr />

            <div className="page-item">
                <div className="txt-holder child-item">
                    <h3>{servicesResources[lang].Text03}</h3>
                    <p>{servicesResources[lang].Text04}</p>
                </div>
                <div className="img-holder child-item">
                    <img src="/images/web-dev-01.png" alt="web dev" />
                </div>
            </div>

            <div className="page-item reverse">
                <div className="txt-holder child-item">
                    <h3>{servicesResources[lang].Text05}</h3>
                    <p>{servicesResources[lang].Text06}</p>
                </div>
                <div className="img-holder child-item">
                    <img src="/images/Infrastructure.png" alt="infra" />
                </div>
            </div>

            <div className="page-item mb-50">
                <div className="txt-holder child-item">
                    <h3>{servicesResources[lang].Text07}</h3>
                    <p>{servicesResources[lang].Text08}</p>
                </div>
                <div className="img-holder child-item">
                    <img src="/images/IT-Networking.jpg" alt="networking" />
                </div>
            </div>
        </div>
    )
}


export default Services;