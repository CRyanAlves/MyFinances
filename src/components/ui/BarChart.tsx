import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function BarChart() {
  const [state] = useState({
    series: [
      {
        name: "Patrimonio Acumulado",
        data: [
          600.12, 1220, 1828, 2432, 3041, 3647, 4258, 4865, 5468, 6077, 6682,
          7283, 7891, 8495, 9103, 9710, 10318, 10837, 11356, 11882, 12411,
          12941, 13469, 14000, 14528, 15057, 15587, 16116, 16646, 17175, 17705,
          18324, 18943.12,
        ],
      },
    ],
    tooltip: {
      formatter: function (value: number) {
        return `R$ ${value.toFixed(2)}`;
      },
    },
    options: {
      chart: {
        type: "bar",
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
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
          columnWidth: "80%",
          borderRadius: "3",
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        labels: {
          show: false,
          formatter: function (y: number) {
            return ` R$${y
              .toFixed(2)
              .replace(/\./g, ",")
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
          },
        },
        tooltip: {
          enabled: true,
          offsetX: -50,
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2011-01-01",
          "2011-02-01",
          "2011-03-01",
          "2011-04-01",
          "2011-05-01",
          "2011-06-01",
          "2011-07-01",
          "2011-08-01",
          "2011-09-01",
          "2011-10-01",
          "2011-11-01",
          "2011-12-01",
          "2012-01-01",
          "2012-02-01",
          "2012-03-01",
          "2012-04-01",
          "2012-05-01",
          "2012-06-01",
          "2012-07-01",
          "2012-08-01",
          "2012-09-01",
          "2012-10-01",
          "2012-11-01",
          "2012-12-01",
          "2013-01-01",
          "2013-02-01",
          "2013-03-01",
          "2013-04-01",
          "2013-05-01",
          "2013-06-01",
          "2013-07-01",
          "2013-08-01",
          "2013-09-01",
        ],
        labels: {
          rotate: -90,
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
        width={778}
        
      />
    </div>
  );
}
