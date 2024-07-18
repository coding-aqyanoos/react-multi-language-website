
import { resources } from "../Resources/SharedResources";
function TopMenu(props){

    const lang = props.langName;
    
    let pagePath = window.location.pathname.split(lang)[1];
    pagePath = pagePath.split("/")[1]
    if(!pagePath) {
        pagePath = "home"
    }

    return(
        <nav className="main-nav">
            <a href={"/" + lang } className={pagePath === "home"? "current" : ""}>{resources[lang].Home}</a>
            <span className="nav-bar">|</span>

            <a href={"/" + lang + "/services"} className={pagePath === "services"? "current" : ""}>{resources[lang].Services}</a>
            <span className="nav-bar">|</span>

            <a href={"/" + lang + "/contact"} className={pagePath === "contact"? "current" : ""}>{resources[lang].Contact}</a>
            <span className="nav-bar">|</span>

            <a href={"/" + lang + "/about"} className={pagePath === "about"? "current" : ""}>{resources[lang].About}</a>
        </nav>
    )
}


export default TopMenu;