import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function BarChart() {
  const [state] = useState({
    series: [
      {
        name: "Patrimonio Acumulado",
        data: [
          600.12, 1220, 1828, 2432, 3041, 3647, 4258, 4865, 5468, 6077, 6682,
          7283, 7891, 8495, 9103, 9710, 10318, 10837, 11356, 11882, 12411,
          12941,
        ],
      },
    ],
    tooltip: {
      formatter: function (value: number) {
        return `R$ ${value.toFixed(2)}`;
      },
    },
    options: {
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
      chart: {
        toolbar: {
          show: false,
          tools: {
            download: false,
            selection: false,
            zoom: true,
            zoomin: false,
            zoomout: false,
            pan: true,
          },
        },
        autoSelected: "pan",
      },
      plotOptions: {
        bar: {
          columnWidth: "80%",
          borderRadius: 3,
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
        ],
        labels: {
          rotate: -90,
        },
      },
    },
  });
  return (
    <div className="w-full h-full ">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
      />
    </div>
  );
}
