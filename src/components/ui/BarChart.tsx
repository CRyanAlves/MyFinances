import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useMediaQuery } from "react-responsive";

export default function BarChart() {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  const isTablet = useMediaQuery({ minWidth: 501, maxWidth: 1200 });
  const [breakPoint, setBreakPoint] = useState(1000);
  const [wd, setWd] = useState(100);

  useEffect(() => {
    if (isMobile) {
      setBreakPoint(500);
      setWd(200);
    } else if (isTablet) {
      setBreakPoint(1200);
      setWd(300);
    }
  }, [isMobile, isTablet]);

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
        stacked: true,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: -30,
          tools: {
            download: false,
            selection: false,
            zoom: false,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
            customIcons: []
          },
          export: {
            csv: {
              filename: undefined,
              columnDelimiter: ',',
              headerCategory: 'category',
              headerValue: 'value',
              dateFormatter(timestamp) {
                return new Date(timestamp).toDateString()
              }
            },
            svg: {
              filename: undefined,
            },
            png: {
              filename: undefined,
            }
          },
          autoSelected: 'zoom' 
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
          borderRadius: 3,
          dataLabels: {
            position: "top", // top, center, bottom
          },
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
