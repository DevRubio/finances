import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import { AreaChartCard } from "./AreaChartCard";
import { DonutChartCard } from "./DonutChartCard";
import { SaldoActual } from "./SaldoActual";
import { BarListCard } from "./BarListCard";

const ContainerCharts = () =>{
    return(
        <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2 m-5">                     
            <AreaChartCard/>               
            <DonutChartCard/>
            <BarListCard/>
            <SaldoActual/>      
      </Grid>
    )
}

export { ContainerCharts }