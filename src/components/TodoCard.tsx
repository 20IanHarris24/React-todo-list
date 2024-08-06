import { ReactElement } from "react";



import "../support/styling";
import { ITodo } from "../support/interfaces";



interface ITodoProps{

    card: ITodo;
}



export function TodoCard ({card}: ITodoProps): ReactElement {

    return <article className="card-container">
            <div className="title-container">
                <p className="title">{card.title}</p>
                <p className="description">{card.description}</p>
            </div>
            <div className="status">
                <p className="date">{card.date}</p>
                <p className="priority">{card.priority}</p>
                <p className="complete">{card.complete}</p>
            </div>
            
            </article>


            {/* <article className="movie-card" onClick={() => onClick(movie)}>
            </article> */}
        
}