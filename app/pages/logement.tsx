import { useParams, Navigate } from "react-router";
import logements from "~/data/logements.json";
import Tag from "~/components/Tag";
import Carousel from "~/components/Carousel";
import Collapse from "~/components/Collapse";
import Rating from "~/components/Rating";
import type { Logement as LogementType } from "~/types/logement";

export default function Logement() {
    const { id } = useParams();
    const logement = logements.find((l: LogementType) => l.id === id);

    if (!logement) {
        return <Navigate to="/404" replace />;
    }

    return (
        <main className="logement">
            <Carousel images={logement.pictures} />
            <div className="logement__info">
                <div className="logement__header">
                    <h1 className="logement__title">{logement.title}</h1>
                    <p className="logement__location">{logement.location}</p>
                    <div className="logement__tags">
                        {logement.tags.map((tag: string) => (
                            <Tag key={tag} label={tag} />
                        ))}
                    </div>
                </div>
                <div className="logement__host-rating">
                    <Rating value={logement.rating} />
                    <div className="logement__host">
                        <span className="logement__host-name">{logement.host.name}</span>
                        <img className="logement__host-picture" src={logement.host.picture} alt={logement.host.name} loading="lazy" />
                    </div>
                </div>
            </div>
            <div className="logement__details">
                <Collapse title="Description">
                    <p>{logement.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                    <ul>
                        {logement.equipments.map((item: string) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </main>
    );
}
