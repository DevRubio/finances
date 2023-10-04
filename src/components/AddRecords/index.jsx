import { Modal, Button } from "flowbite-react"
import { useState } from "react"
import { IconPlus } from "../../assets/Icons"
//import Datepicker from "tailwind-datepicker-react"
import { DataPicker } from "../DataPicker"


const AddRecords = ({acounts}) =>{

    const [openModal, setOpenModal] = useState("")
    const props = { openModal, setOpenModal}

    const [startDate, setStartDate] = useState(new Date());


    return(
        <div>
            <button
                className="fixed bottom-5 right-5 cursor-pointer hover:animate-bounce"
                onClick={() => props.setOpenModal("form-elements")}
            >
                <IconPlus/>
            </button>

            <Modal
                show={props.openModal === "form-elements"}
                size="xl"
                popup
                onClose={() => props.setOpenModal(undefined)}
            >
                <Modal.Header>
                    <div className="m-2">
                        <h3>Añadir Registro</h3>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="m-3">                    
                        <div className="flex justify-center">
                            <div className="">
                                <input type="radio" id="gasto" name="registros" value="gasto" className="hidden peer" required/>
                                <label htmlFor="gasto" className="inline-flex w-28 items-center justify-center p-1 text-gray-500 bg-white border border-gray-200 rounded-l-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-slate-100">
                                    <div className="block">
                                        <div className="w-full">Gasto</div>
                                    </div>
                                </label>
                            </div>
                            <div className="">
                                <input type="radio" id="ingreso" name="registros" value="ingreso" className="hidden peer"/>
                                <label htmlFor="ingreso" className="inline-flex w-28 items-center justify-center p-1 text-gray-600 bg-white border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-slate-100">
                                    <div className="block">
                                        <div className="w-full">Ingreso</div>
                                    </div>
                                </label>
                            </div>
                            <div className="">
                                <input type="radio" id="transferencia" name="registros" value="transferencia" className="hidden peer"/>
                                <label htmlFor="transferencia" className="inline-flex w-28 items-center justify-center p-1 text-gray-600 bg-white border border-gray-200 rounded-r-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-slate-100">
                                    <div className="block">
                                        <div className="w-full">Transferencia</div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="grid grid-cols-3 gap-3 mt-3">
                            <div className="flex flex-col relative">                            
                                <select id="cuenta" className="block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-end">
                                    {acounts.map((item, index)=>(                                   
                                        <option selected={index[0]} key={item.name} value={item.name}>{item.name}</option>
                                    ))}
                                </select>
                                <label htmlFor="cuenta" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Cuenta</label>
                            </div>
                                <div className="relative flex flex-col">
                                    <input type="number" id="importe" className="block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-end" placeholder="0"/>
                                    <label htmlFor="importe" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Importe</label>
                                </div>
                                <div className="relative flex flex-col">                                
                                    <select id="moneda" className="block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-end">                                  
                                        <option selected value="COP">COP</option>
                                    </select>
                                    <label htmlFor="moneda" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Moneda</label>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mt-3">
                                <div>
                                    <div className= "relative">
                                        <select id="categoria" className="block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-end">
                                            <option selected></option>
                                            <option value="Comida" >Comida</option>
                                        </select>
                                        <label htmlFor="categoria" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Categoria</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="absolute w-[150px] text-right">                                                   
                                    <DataPicker/>
                                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Fecha</label>
                                    </div>                                    
                                </div>
                                <div>
                                    <div className="relative">
                                    <input type="time" id="hora" className="block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer text-end" />
                                    <label htmlFor="hora" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Hora</label>
                                    </div>                               
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="flex justify-center">
                    <Button className="rounded-3xl">Añadir registro</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export {AddRecords}