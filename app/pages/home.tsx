import { useLoaderData } from "react-router";
import ImageTitle from "~/components/ImageTitle";
import LogementCard from "~/components/LogementCard";
import logements from "~/data/logements.json";

import type { Logement as LogementType } from "~/types/logement"

export default function Home() {

  return (
    <main>
      <ImageTitle name="Chez vous, partout et ailleurs"></ImageTitle>
      <section className="logements-grid">
        { logements.map((logement : LogementType) => {
          return(
            <LogementCard key={logement.id} logement={logement}></LogementCard>
          )
        })}
      </section>
    </main>
  );
}
