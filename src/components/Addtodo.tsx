/* Addtodo Component that adds a todo card to a list */




import {ChangeEventHandler, FormEventHandler, MouseEventHandler, ReactElement, useState } from "react";
import { dropdownchoices, Timestamp, Radiobtn } from ".";
import { ITodo } from ".";
import { Textinput, Dropdown, Button } from ".";

import "../css/addtodo.css"




interface IAddtodoProps {

    addTodo: (addtodo: ITodo) => void;
}

export function AddTodo ({addTodo} : IAddtodoProps) : ReactElement {

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [priority, setPriority] = useState<string>('none');
    const [completed, setCompleted ] = useState<boolean>(false);
   

    const handleOnChange : ChangeEventHandler<HTMLInputElement> = () => {
       
        setCompleted(!completed); 
    }


    const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const newTodo: ITodo = {

            id: Date.now(),  //millesecond date representation used as the id: key
            date: Timestamp(),
            title,
            description,
            author,
            priority,
            completed,
        };
        
        addTodo(newTodo);
        console.log(newTodo);

};
      
    const handleOnClearClick: MouseEventHandler<HTMLButtonElement> = () => {
    
            setTitle("");
            setDescription("");
            setAuthor("");
            setPriority('none');
            setCompleted(false);
        };




return <section className="addtodo "> 
     <article className="form-container">
        
       <form className ="form-input" onSubmit={handleOnSubmit}>
            <label className ="todo-title">
                <Textinput  label="Title" type="text" onChange={(e) => {setTitle(e.target.value);}} value={title}/>
            </label>

            <label className ="todo-description">
              <Textinput  label="Description " type="textarea"  onChange={(e) => {setDescription(e.target.value);}} value={description} />
            </label>

            <label className ="todo-author">
              <Textinput label="Author" type="text" onChange={(e) => {setAuthor(e.target.value);}} value={author}/>
            </label>

            <label className ="todo-prio">
                    <Dropdown label="Priority" onChange={(e) => {setPriority(e.target.value);}} options={dropdownchoices} value={priority} />
            </label>

            <label className ="todo-complete custom-radiobtn">
                <Radiobtn label="Complete" type="radio"  checked={completed} onChange={handleOnChange}/>
            </label>

            <label className ="todo-submit">
                <Button label="Add"  type="submit"></Button>
            </label>


            <div className="actions">
            <div className="empty-space"></div>
                <div className="action-buttons">
                <Button label="Clear" onClick={handleOnClearClick} type="button" />
              </div>
            </div>
           
        </form>
    </article>               
                 
    </section>
  
}