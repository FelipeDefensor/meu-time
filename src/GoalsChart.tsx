import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Text } from "recharts";
import { CountByMinutes, Minutes } from "./types";

type Props = {
  data: CountByMinutes;
};

const GoalsChart: React.FC<Props> = ({ data }) => {
  console.log(data);
  const chartData = Object.keys(data).map((key) => {
    const { total } = data[key as Minutes];
    console.log(key, total);
    return {
      name: key,
      total: total ? total : 0,
    };
  });

  return (
    <>
      <Text
        x={0}
        y={0}
        width={500}
        style={{ textAnchor: "middle", transform: "translate(250px, -20px)" }}
      >
        Goals by Match Time
      </Text>
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 15,
        }}
        title={"Goals"}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" label={{ value: "Minutes", dy: 20 }} />
        <YAxis label={{ value: "Goals", angle: -90 }} />
        <Tooltip />
        <Bar dataKey="total" stackId="a" fill="#82ca9d" />
      </BarChart>
    </>
  );
};

export default GoalsChart;
