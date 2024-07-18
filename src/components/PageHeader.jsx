
import Search from "./Search"
import LangNav from "./LangNav"
import TopMenu from "./TopMenu"

function PageHeader(props){

    return(
        <div className="page-hdr">
            <Search langName={props.langName}/>
            <LangNav langName={props.langName}/>
            <TopMenu langName={props.langName}/>
        </div>
    )
}


export default PageHeader;