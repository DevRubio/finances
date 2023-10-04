import { CardAccounts } from "../CardAccounts/index";
import { AddAccount } from "../AddAccount";
const Accounts = ({ acounts }) => {
  return (
    <div className="w-full bg-slate-100 h-full flex flex-col">
      <div className="grid mt-5 ml-16 mb-8 mr-16 grid-cols-3 gap-2">
        {acounts.map((item) => (
          <CardAccounts
            color={item.color}
            key={item.name}
            name={item.name}
            balance={item.balance}
          />
        ))}
        <AddAccount />
      </div>
    </div>
  );
};

export { Accounts };
