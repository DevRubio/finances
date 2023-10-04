//import './App.css'
import { Navbar } from './components/Navbar'
import { Accounts } from './components/Accounts'
import { AddRecords } from './components/AddRecords'

function App() {

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

  return (
    <>
      <Navbar/>
      <Accounts 
      acounts={acounts}
      />
      <AddRecords
      acounts={acounts}
      />
    </>
  )
}

export default App
