import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import moment from "moment";
import { getInfoGraficData } from "../../firebase/Firestore";
import { ApexOptions, ChartData } from "../../interfaces";

interface IProsGetDates {
  totalValue: string;
  date: string;
}

interface IPropsDate {
  prices: number[];
  dates: string[];
}

export default function Chart() {
  const [monthDataSeries, setMonthDataSeries] = useState<IPropsDate>({
    prices: [],
    dates: [],
  });

  useEffect(() => {
    async function getInfoGrafic() {
      const getData = await getInfoGraficData();

      if (getData !== undefined) {
        getData.sort((a, b) => {
          const dateA: Date = moment(a.date, "DD/MM/YYYY, HH:mm:ss").toDate();
          const dateB: Date = moment(b.date, "DD/MM/YYYY, HH:mm:ss").toDate();
          return dateA.getTime() - dateB.getTime();
        });
      }


      if (getData) {
        const listItem: IPropsDate = {
          prices: [],
          dates: [],
        };

        getData.forEach((element: IProsGetDates) => {
          const date: string = element.date.slice(0, 10);
          const dateFull: string =
            date.split("/").reverse().join("-") + element.date.slice(10, 20);

          listItem.prices.push(Number(element.totalValue));
          listItem.dates.push(dateFull);
        });

        setMonthDataSeries(listItem);
      }
    }

    getInfoGrafic();
  }, []);


  const series: ChartData[] = [
    {
      name: "R$",
      data: monthDataSeries.prices,
    },
  ];
  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },

    title: {
      text: "Grafico de seus gastos",
      align: "left",
    },
    subtitle: {
      text: "",
      align: "left",
    },
    labels: monthDataSeries.dates,
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      opposite: true,
    },
    legend: {
      horizontalAlign: "left",
    },
  };

  return (
    <>
      <ReactApexChart options={options} series={series} type="area" />
    </>
  );
}
