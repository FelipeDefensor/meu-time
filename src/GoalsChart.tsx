import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { CountByMinutes, Minutes } from "./types";

type Props = {
  data: CountByMinutes;
};

const GoalsChart: React.FC<Props> = ({ data }) => {
  const chartData = Object.keys(data).map((key) => {
    const { total } = data[key as Minutes];
    return {
      name: key,
      total: total ? total : 0,
    };
  });

  return (
    <>
      <h4>Gols/tempo de jogo</h4>
      <ResponsiveContainer width="95%" height={300}>
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 15,
          }}
          title={"Gols"}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{ value: "Minutos", dy: 20 }} />
          <YAxis label={{ value: "Gols", angle: -90 }} />
          <Tooltip />
          <Bar dataKey="total" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default GoalsChart;
