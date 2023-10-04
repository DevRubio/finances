import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import { useState } from "react";

const AddAccount = () => {
  const [openModal, setOpenModal] = useState("")
  const props = { openModal, setOpenModal}

  return (
    <>
      <div
        onClick={() => props.setOpenModal("form-elements")}
        className="flex justify-around items-center border-2 border-dashed hover:border-blue cursor-pointer rounded-lg"
      >
        <div>+</div>
        <div>Añadir Cuenta</div>
      </div>    
      <Modal
        show={props.openModal === "form-elements"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>
            <div className="m-2">
            <h3>Añadir Cuenta</h3>
            </div>

        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">            
            <div>
              <div className="mb-2 block">
                <Label value="Nombre" />
              </div>
              <TextInput placeholder="Nombre de la cuenta" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Tipo de Cuenta" />
              </div>
              <Select>
                <option>Efectivo</option>
                <option>Ahorros</option>
                <option>Inversion</option>
              </Select>
            </div> 
            <div>
                <div className="mb-2 block">
                    <label>Monto inicial</label>
                </div>
                <TextInput placeholder="0"/>
                </div>    

            <div className="flex justify-center text-sm font-medium text-gray-500 dark:text-gray-300">             
              <Button className="rounded-3xl">Añadir Cuenta</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export { AddAccount }