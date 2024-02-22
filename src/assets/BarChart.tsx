import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function BarChart() {
  const [state] = useState({
    series: [
      {
        name: "Patrimonio Acumulado",
        data: [
          600, 1206, 1812, 2451, 3025, 3569, 4026, 4567, 5113, 5663, 6225, 6789,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      responsive: [
        {
          breakpoint: 500,
          options: {
            chart: {
              width: 10,
              type: "bar",
            },
          },
        },
      ],
      theme: {
        monochrome: {
          enabled: true,
          color: "#1ba8bd",
          shadeTo: "dark",
          shadeIntensity: 0.75,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#1BF881"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100],
          colorStops: [],
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 3,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: number) {
          return "R$ " + val;
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 100,
              opacityTo: 100,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: number) {
            return "R$ " + val;
          },
        },
      },
    },
  });
  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={365}
        width={764}
      />
    </div>
  );
}
