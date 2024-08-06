import { ChangeEventHandler, FormEventHandler, ReactElement, useState } from "react";


export function Addtodo () : ReactElement{

    const [inputTitle, setTitle] = useState<string>("");
    const [inputDescription, setDescription] = useState<string>("");
    const [inputAuthor, setAuthor] = useState<string>("");
    /* const [prio, setprio] = useState(null); */
    /* const [title, settitle] = useState(null); */


   const handleOnSelect = () => {

   };


   const handleOnSubmit = () => {

   };
      
return <section className="addtodo container row"> 
     <article className="form-container">
        
       <form className ="form col">
            <label className ="label todo-title">Title
               <input className ="input todo-input" type="text" id="title" autoCorrect="off" onChange={(e) => {setTitle(e.target.value);}} value={inputTitle}/>
            </label>

            <label className ="label todo-description">Description
              <input className ="input todo-description-input" type="text" id="description" autoCorrect="off" onChange={(e) => {setDescription(e.target.value);}} value={inputDescription} />
            </label>

            <label className ="label todo-author">Author
              <input className ="input todo-author-input" type="text" id="description" autoCorrect="off" onChange={(e) => {setAuthor(e.target.value);}} value={inputAuthor}/>
            </label>

            {<Date/>}

            <label className ="label todo-prio" onChange={handleOnSelect}>Priority
                    <select id="prio" name="prio">
                        <option value="none">none</option>
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
            </label>

            <label className ="label todo-complete">Complete
            <input className ="btn btn-press btn-style-std disabled" type="radio" onChange={handleOnSelect}></input>
            </label>

            <label className ="label todo-submit">Submit
            <button className ="btn btn-press btn-style-std disabled" type="submit" onSubmit={handleOnSubmit} >Done</button>
            </label>
           
        </form>
    </article>               
                 
    </section>

}