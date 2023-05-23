import { Formation } from "./types";

function MostUsedFormation({ formation }: { formation: Formation }) {
  return (
    <p>
      <strong>Preferred formation: </strong>
      {formation.formation + " (" + formation.played + " times)"}
    </p>
  );
}

export default MostUsedFormation;
