import { useState } from "react"
export function Todoinput(props){
    const{handleAddTodo} = props
    const [inputValue, setInputValue] = useState('')
    return(
        <div className="input-container">
            <input value={inputValue} onChange={(e)=>{
                setInputValue(e.target.value)
                }} 
                placeholder="Add tasks" />
            <button onClick={() => {
                if(!inputValue) {return}
                handleAddTodo(inputValue)
                setInputValue('')
            }}>
                
                <i className="fa-solid fa-circle-plus"></i>
            </button>
        </div>
    )
}