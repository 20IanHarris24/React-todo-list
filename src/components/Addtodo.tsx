import { ReactElement, useState } from "react";
import "../support/interfaces"
import { IAddtodo} from "../support/interfaces";


interface IAddtodoProps {

    addTodo: (addtodo: IAddtodo) => void;
}

export function Addtodo ({addTodo} : IAddtodoProps) : ReactElement {

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [priority, setPriority] = useState<string>('none');
    const [completed] = useState<boolean>(false);



    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const newTodo: IAddtodo = {

            id: Date.now(),
            title,
            description,
            author,
            priority,
            completed,
        };
        
        /* addTodo(newTodo); */
        console.log(newTodo);
   };
      
return <section className="addtodo container row"> 
     <article className="form-container">
        
       <form className ="form-input col" onSubmit={handleOnSubmit}>
            <label className ="todo-title">Title
               <input className ="todo-input" type="text" id="title" autoCorrect="off" onChange={(e) => {setTitle(e.target.value);}} value={title}/>
            </label>

            <label className ="todo-description">Description
              <input className ="todo-description-input" type="text" id="description" autoCorrect="off" onChange={(e) => {setDescription(e.target.value);}} value={description} />
            </label>

            <label className ="todo-author">Author
              <input className ="input todo-author-input" type="text" id="description" autoCorrect="off" onChange={(e) => {setAuthor(e.target.value);}} value={author}/>
            </label>

            <label className ="todo-prio">Priority
                    <select id="prio" name="prio" onChange={(e) => {setPriority(e.target.value);}} value={priority}>
                        <option value="none">none</option>
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
            </label>

            <label className ="todo-complete">Complete
            <input className ="btn-press btn-style-std disabled" type="radio"  defaultChecked = {completed}/>
            </label>

            <label className ="todo-submit">Submit
            <button className ="btn-press btn-style-std disabled" type="submit">Done</button>
            </label>
           
        </form>
    </article>               
                 
    </section>

}