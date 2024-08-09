import { ChangeEventHandler, ReactElement, useState } from "react";

import { ITodo } from ".";


import "../css/listtodos.css";



interface ITodoProps{

    tdcard: ITodo;
    onClick: (tdcard: ITodo) => void;
}



export function TodoCard ({tdcard, onClick}: ITodoProps): ReactElement {



        const [completed, setCompleted] = useState<boolean>(false);
        const [priority, setPriority] = useState<string>("none");


        const handleOnChange: ChangeEventHandler<HTMLInputElement> = () => {
        
            setCompleted(!completed);
        }

        const handleOnSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
            setPriority(e.target.value);
        }


    return (<article className="card-container" onClick={() => onClick(tdcard)}>
            <div className="title-container">
                <label > 
                    <p className="date">Date: {tdcard.date}</p>    
                </label>
                <label>
                    <p className="title">Title: {tdcard.title}</p>
                </label>
                <label>
                    <p className="description">Description: {tdcard.description}</p>
                </label>
                <label>
                    <p className="author">Author: {tdcard.author}</p>
                </label>
            </div>
            <div className="status">
                <label className ="todo-prio">Priority
                     <select id="prio" name="prio" onChange={handleOnSelect} value={priority}>
                         <option value="none">none</option>
                         <option value="low">low</option>
                         <option value="medium">medium</option>
                         <option value="high">high</option>
                     </select>
                </label>
                                   
                <label className ="todo-complete">Complete  
                    <input className ="btn-press btn-style-std disabled" type="radio"  onChange={handleOnChange}/>
                </label>
            </div>
            
            </article>

        ); 

}
