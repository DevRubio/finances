import { Card, Flex, Metric, BadgeDelta, Text } from "@tremor/react";

const SaldoActual = () => {
  return (
    <Card className="max-w-sm">
      <Flex justifyContent="between" alignItems="center">
        <Text>Saldo Actual</Text>
        <BadgeDelta
          deltaType="moderateIncrease"
          isIncreasePositive={true}
          size="xs"
        >
          +12.3%
        </BadgeDelta>
      </Flex>
      <Metric>$ 1,800,456</Metric>
    </Card>
  );
};

export { SaldoActual };
