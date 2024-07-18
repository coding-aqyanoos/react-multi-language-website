import { resources } from "../Resources/SharedResources";

function Newsletter(props){

    return(
        <section className="newsletter">
            <h2 className="txt-center">{resources[props.langName].NewsL}</h2>
            <form action="#">
                <input type="email" placeholder="fullname@example.com" required/>
                <input type="submit" value={resources[props.langName].Submit}/>
            </form>
        </section>
    )
}

export default Newsletter;