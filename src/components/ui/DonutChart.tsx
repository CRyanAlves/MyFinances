import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function DonutChart() {
  const [state] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        show: false,
      },
    },
  });
  return (
    <div className="h-full ">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
      />
    </div>
  );
}
