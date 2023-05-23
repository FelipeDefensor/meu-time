import { Fixtures } from "./types";

type WinLossTableProps = {
  fixtures: Fixtures;
};

const WinLossTable = ({ fixtures }: WinLossTableProps) => (
  <table className="table table-striped table-bordered text-center">
    <thead>
      <tr>
        <th></th>
        <th>Home</th>
        <th>Away</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <strong>Played</strong>
        </td>
        <td>{fixtures.played.home}</td>
        <td>{fixtures.played.away}</td>
        <td>{fixtures.played.total}</td>
      </tr>
      <tr className="table-success">
        <td>
          <strong>Wins</strong>
        </td>
        <td>{fixtures.wins.home}</td>
        <td>{fixtures.wins.away}</td>
        <td>{fixtures.wins.total}</td>
      </tr>
      <tr className="table-warning">
        <td>
          <strong>Draws</strong>
        </td>
        <td>{fixtures.draws.home}</td>
        <td>{fixtures.draws.away}</td>
        <td>{fixtures.draws.total}</td>
      </tr>
      <tr className="table-danger">
        <td>
          <strong>Losses</strong>
        </td>
        <td>{fixtures.loses.home}</td>
        <td>{fixtures.loses.away}</td>
        <td>{fixtures.loses.total}</td>
      </tr>
    </tbody>
  </table>
);

export default WinLossTable;
