import { Fixtures } from "./types";

type WinLossTableProps = {
  fixtures: Fixtures;
};

const WinLossTable = ({ fixtures }: WinLossTableProps) => (
  <div>
    <h4>Resultados</h4>
    <table className="table table-striped table-bordered text-center">
      <thead>
        <tr>
          <th></th>
          <th>Casa</th>
          <th>Fora</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>Jogadas</strong>
          </td>
          <td>{fixtures.played.home}</td>
          <td>{fixtures.played.away}</td>
          <td>{fixtures.played.total}</td>
        </tr>
        <tr className="table-success">
          <td>
            <strong>Vitórias</strong>
          </td>
          <td>{fixtures.wins.home}</td>
          <td>{fixtures.wins.away}</td>
          <td>{fixtures.wins.total}</td>
        </tr>
        <tr className="table-warning">
          <td>
            <strong>Empates</strong>
          </td>
          <td>{fixtures.draws.home}</td>
          <td>{fixtures.draws.away}</td>
          <td>{fixtures.draws.total}</td>
        </tr>
        <tr className="table-danger">
          <td>
            <strong>Derrotas</strong>
          </td>
          <td>{fixtures.loses.home}</td>
          <td>{fixtures.loses.away}</td>
          <td>{fixtures.loses.total}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default WinLossTable;
