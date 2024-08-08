import { ReactElement } from "react";

import { TodoCard } from "..";
import { ITodo } from "..";
import "../css/listtodos.css";


interface ITodoListProps{

    todos : ITodo[];
}


export function ListTodos ({todos} : ITodoListProps) : ReactElement{

    console.log(todos);

    return (
    <section className="todo-list container col">
           <div className="card-row"> 
            {todos.map(todocard => (<TodoCard key={todocard.id} tdcard = {todocard}/>))}
            </div>
    </section>
    );
}