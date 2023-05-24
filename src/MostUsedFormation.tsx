import { Formation } from "./types";

function MostUsedFormation({ formation }: { formation: Formation }) {
  return (
    <div>
      <h4>Preferred formation</h4>
      <p>{formation.formation + " (" + formation.played + " times)"}</p>
    </div>
  );
}

export default MostUsedFormation;
