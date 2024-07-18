import { resources } from "../Resources/SharedResources";

function Footer(props){

    return(
        <footer className="main-footer">
            <div className="footer-items">
                <div>
                    <div className="bold">{resources[props.langName].Main}</div>
                    <a href={"/" + props.langName}>{resources[props.langName].Home}</a>
                    <a href={"/" + props.langName + "/services"}>{resources[props.langName].Services}</a>
                    <a href={"/" + props.langName + "/contact"}>{resources[props.langName].Contact}</a>
                    <a href={"/" + props.langName + "/privacy"}>{resources[props.langName].Privacy}</a>
                    <a href={"/" + props.langName + "/about"}>{resources[props.langName].About}</a>
                </div>

                <div>
                    <div className="bold">{resources[props.langName].Services}</div>
                    <a href="#">{resources[props.langName].WebDev}</a>
                    <a href="#">{resources[props.langName].MobileDev}</a>
                    <a href="#">{resources[props.langName].Infra}</a>
                    <a href="#">{resources[props.langName].Net}</a>
                    <a href="#">{resources[props.langName].HelpDesk}</a>
                </div>

                <div>
                    <div className="bold">{resources[props.langName].SocialMedia}</div>
                    <a href="#">{resources[props.langName].FB}</a>
                    <a href="#">{resources[props.langName].ING}</a>
                    <a href="#">{resources[props.langName].YT}</a>
                    <a href="#">{resources[props.langName].X}</a>
                    <a href="#">{resources[props.langName].IN}</a>
                    <a href="#">{resources[props.langName].WP}</a>
                </div>

                <div>
                    <div className="bold">{resources[props.langName].More}</div>
                    <a href="#">{resources[props.langName].Jobs}</a>
                    <a href="#">{resources[props.langName].Partners}</a>
                    <a href="#">{resources[props.langName].Resources}</a>
                </div>

            </div>

            <div className="txt-center copy-right">
                <p>
                    &copy; Created By aqyanoos.com | 2024
                </p>
            </div>
        </footer>
    )
}


export default Footer;