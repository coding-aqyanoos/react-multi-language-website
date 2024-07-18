
import { homeResources } from "../Resources/Home";
import { getLang } from "../lib"

import "./Home.css"
import Newsletter from "./Newsletter";

function Home() {
    const lang = getLang()
    document.title = "Welcome"
    return (
        <div className="h-p">
            <div className="showcase">
                <img src="/images/7946.jpg" alt="showcase" />
            </div>
            <main className="h-main">
                <h1 className="txt-center">{homeResources[lang].Welcome}</h1>

                <p className="home-txt-1">{homeResources[lang].HomeT1}</p>

                <div className="catchy-txt">
                    {homeResources[lang].HomeT2}
                </div>

                <section className="promotion">
                    <h2 className="txt-center">{homeResources[lang].HomeT3}</h2>
                    <div className="promo-holder mt-70">
                        <div className="promo-item">
                            <img src="/images/promo-01.png" alt="promo db" />
                            <div className="promo-txt">
                                <div>{homeResources[lang].HomeT4} <span className="discount">{lang === "ar" ? "۵۹٪" : "59% OFF"}</span></div>
                            </div>
                        </div>
                        <div className="promo-item">
                            <img src="/images/web-des.jpg" alt="web design" />
                            <div className="promo-txt">
                                <div>{homeResources[lang].HomeT5} <span className="discount">{lang === "ar" ? "۳۹٪" : "39%  OFF"}</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="promo-holder mt-70">
                        <div className="promo-item">
                            <img src="/images/48946511.jpg" alt="mobile app development" />
                            <div className="promo-txt">
                                <div>{homeResources[lang].HomeT6} <span className="discount"> {lang === "ar" ? "۲۹٪" : "29%  OFF"}</span></div>
                            </div>
                        </div>
                        <div className="promo-item">
                            <img src="/images/services.jpg" alt="All around IT" />
                            <div className="promo-txt">
                                <div>{homeResources[lang].HomeT7} <span className="discount"> {lang === "ar" ? "۴۹٪" : "49% OFF"} </span></div>
                            </div>
                        </div>
                    </div>
                </section>

                <Newsletter langName={lang}/>
            </main>
        </div>
    )
}


export default Home;