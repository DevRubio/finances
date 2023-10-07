import { CardAccounts } from "../CardAccounts/index";
import { AddAccount } from "../AddAccount";
import { Grid, Col, Card, Metric, Text } from "@tremor/react";

const Accounts = ({ acounts }) => {
  return (
    <div className="bg-slate-100 p-2">  
      <Grid numItems={1} numItemsSm={3} numItemsLg={5} className="gap-2 m-4">
        {acounts.map((item) => (
            <CardAccounts
              color={item.color}
              key={item.name}
              name={item.name}
              balance={item.balance}
            />
          ))}
          <AddAccount />    
    </Grid>
  </div>

  );
};

export { Accounts };
