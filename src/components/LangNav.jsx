import { langList } from "../lib";

function LangNav(props){
        const pathName = window.location.pathname.split(props.langName)[1];
        const langFullName = langList[props.langName]
        const langKeys = Object.keys(langList)

    return(
        <div className="lang-selector">
            <div className="current-lang">{langFullName} <span className="arr-d">▽</span></div>
            <div className="languages">
                {
                    langKeys.map(l=> <div key={l}>
                            <a href={"/" + l + pathName}>{langList[l]}</a>
                        </div>)
                }
            </div>
        </div>
    )
}


export default LangNav;