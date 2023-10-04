import Datepicker from "tailwind-datepicker-react"
import { useState } from "react"

const options = {
    //title: "Demo Title",
    autoHide: true,
    todayBtn: true,    
    clearBtn: true,
    maxDate: new Date(),    
    
    theme: {
        //background: "bg-gray-700 dark:bg-gray-800",       
        todayBtn: "",
        clearBtn: "",
        icons: "",
        text: "lg",
        disabledText: "bg-gray-200",
        input: "",
        inputIcon: "",
        selected: "",
    },
    icons: {
        // () => ReactElement | JSX.Element
        prev: () => <span>-</span>,
        next: () => <span>+</span>,
    },
    datepickerClassNames: "top-12",
    inputDateFormatProp:{day: "numeric", month: "numeric", year: "numeric"},
    language: "es",
}

const DataPicker = () =>{   
  
        const [show, setShow] = useState(false)
        const handleChange = (selectedDate) => {
            console.log(selectedDate)
        }
        const handleClose = (state) => {
            setShow(state)
        }
    
        return (
            <div>
                <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
            </div>
        )
      
}

export { DataPicker }