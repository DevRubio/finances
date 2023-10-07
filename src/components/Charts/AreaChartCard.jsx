import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    "Período Actual": 2890,
    "Período Anterior": 2338,
  },
  {
    date: "Feb 22",
    "Período Actual": 2756,
    "Período Anterior": 2103,
  },
  {
    date: "Mar 22",
    "Período Actual": 3322,
    "Período Anterior": 2194,
  },
  {
    date: "Apr 22",
    "Período Actual": 3470,
    "Período Anterior": 2108,
  },
  {
    date: "May 22",
    "Período Actual": 3475,
    "Período Anterior": 1812,
  },
  {
    date: "Jun 22",
    "Período Actual": 3129,
    "Período Anterior": 1726,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const AreaChartCard = () => (

    
  <Card>
    <Title>Comparación de período a período</Title>
    <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      index="date"
      categories={["Período Actual", "Período Anterior"]}
      colors={["indigo", "cyan"]}
      valueFormatter={dataFormatter}
    />
  </Card>
);

export { AreaChartCard }