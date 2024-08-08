import { ReactElement } from "react";

import { ITodo } from "..";


import "../css/listtodos.css";



interface ITodoProps{

    tdcard: ITodo;
}



export function TodoCard ({tdcard}: ITodoProps): ReactElement {

    return <article className="card-container">
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
                <label>
                    <p className="priority">Priority: {tdcard.priority}</p>
                </label>
                <label>
                    <p className="complete">Complete: {tdcard.completed}</p>
                </label>
            </div>
            
            </article>


            {/* <article className="movie-card" onClick={() => onClick(movie)}>
            </article> */}
        
}






{/* <article className="form-container">
        
        <form className ="form-input col" >
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
            
         </form> */}