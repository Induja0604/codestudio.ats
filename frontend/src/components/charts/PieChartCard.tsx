import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

interface PieData {
  name: string;
  value: number;
}

interface Props {
  data: PieData[];
}

export default function PieChartCard({ data }: Props) {
  return (
    <div className="bg-white p-5 rounded-xl shadow mt-6 h-72">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}