import {
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const AreaCharts = () => {
  const data = [
    {
      name: "01/24",
      uv: 4000,
      amt: 2400,
    },
    {
      name: "02/24",
      uv: 5000,
      amt: 2210,
    },
    {
      name: "03/24",
      uv: 6000,
      amt: 2290,
    },
    {
      name: "04/24",
      uv: 5500,
      amt: 2000,
    },
    {
      name: "05/24",
      uv: 6000,
      amt: 2181,
    },
    {
      name: "06/24",
      uv: 7000,
      amt: 2500,
    },
  ];

  const CustomizedAxisTick = (props) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          fontSize={20}
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="75%">
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
        <YAxis />

        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaCharts;
