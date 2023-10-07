import { Card, Title, DonutChart } from "@tremor/react";
import { useState } from "react";

const DonutChartCard = () => {
  const cities = [
    {
      name: "Alimentos y Bebidas",
      sales: 9800,
    },
    {
      name: "Inversiones",
      sales: 4566,
    },
    {
      name: "Transporte",
      sales: 3908,
    },
    {
      name: "Vivienda",
      sales: 2400,
    },
    {
      name: "Gastos Financieros",
      sales: 1908,
    },
    {
      name: "Compras",
      sales: 1399,
    },
  ];
  const valueFormatter = (number) =>`$ ${Intl.NumberFormat("us").format(number).toString()}`;
  const [value, setValue] = useState(null);
  return (
    <>
      <Card className="mx-auto">
        <Title>Estructura de gastos</Title>
        <DonutChart
          className="mt-6"
          data={cities}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]}
          onValueChange={(v) => setValue(v)}
        />
        <pre>{JSON.stringify(value?.sales)}</pre>
      </Card>
      
    </>
  );
};

export { DonutChartCard };
