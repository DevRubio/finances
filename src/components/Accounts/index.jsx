import {CardAccounts} from '../CardAccounts/index'
import { AddAccount } from '../AddAccount'
const Accounts = () =>{

    const acounts = [
        {
            name: "Efectivo",
            balance: "500.000",
            color: "bg-[#1fb6ff]"
        },
        {
            name: "Banco 1",
            balance: "256.450",
            color:"bg-[#ffb300ff]"
        },
        {
            name: "Banco 2",
            balance: "356.450",
            color:'bg-[#6a1b9a]'
        }        ,
        {
            name: "Banco 3",
            balance: "356.450",
            color:'bg-[#d32f2fff]'
        }
    ]

    return(
        <div className="grid mt-5 grid-cols-3 gap-2">
            {acounts.map(item=>(
                
                <CardAccounts                    
                    color={item.color}
                    key={item.name}
                    name={item.name}
                    balance={item.balance}                    
                />
                ))
            }
            <AddAccount/>
        </div>
    )
}

export { Accounts }