const Navbar = () =>{
    return(
        <div className="flex border w-full h-20">
            <div className="flex ml-16 list-none items-center justify-between gap-3">
                <li className="font-semibold text-lg cursor-pointer">Panel de Control</li>
                <li className="cursor-pointer">Cuentas</li>
            </div>
        </div>
    )
}

export {Navbar}