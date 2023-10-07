import { IconWallet } from "../../assets/Icons";
import { Card, Metric, Text } from "@tremor/react";

const CardAccounts = (props) => {
  return (
/*     <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
    <Text>Sales</Text>
    <Metric>$ 34,743</Metric>
  </Card> */
    <div className={`flex ${props.color} rounded-lg cursor-pointer`}>       
      <div className="w-20 flex justify-center items-center"><IconWallet/></div>
      <div className="w-full flex items-start flex-col">
        <span className="text-gray-100 font-medium mt-1">{props.name}</span>
        <p className="text-white font-semibold mb-1">{props.balance} COP</p>
      </div>
    </div>
  );
};

export { CardAccounts };
