import { Link } from "react-router"
import type { Logement as LogementType } from "~/types/logement"

export default function LogementCard(props : {logement : LogementType}) {
    let logement = props.logement

    return(
        <Link to={`/logement/${logement.id}`} className="logementCard">
            <img src={logement.cover} alt={logement.title} className="logementCard__image" loading="lazy" />
            <div className="logementCard__overlay"></div>
            <h2 className="logementCard__title">{logement.title}</h2>
        </Link>
    )
}