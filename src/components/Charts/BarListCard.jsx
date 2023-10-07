import { BarList, Card, Title, Bold, Flex, Text } from "@tremor/react";

const BarListCard = ()=>{
    const data = [
        {
          name: "Alimentos y Bebidas",
          value: 300
        },
        {
          name: "Bebidas",
          value: 200
        },
    ]
    return(
        <Card className="max-w-lg">
    <Title>Gastos por Categoria</Title>
    <Flex className="mt-4">
      <Text>
        <Bold>Categoria</Bold>
      </Text>
      <Text>
        <Bold>Total</Bold>
      </Text>
    </Flex>
    <BarList data={data} color="fuchsia" className="mt-2"/>

  </Card>
    )
}

export { BarListCard }