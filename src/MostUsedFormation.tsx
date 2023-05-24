import { Formation } from "./types";

function MostUsedFormation({ formation }: { formation: Formation }) {
  return (
    <div>
      <h4>Formação mais comum</h4>
      <p>{formation.formation + " (" + formation.played + " vezes)"}</p>
    </div>
  );
}

export default MostUsedFormation;
