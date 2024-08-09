import { ReactElement } from "react";
import { ITodo } from ".";
import { TodoCard } from ".";



import "../css/listtodos.css";


interface ITodoListProps{

    todos : ITodo[];
    onTodoClick: (todo: ITodo) => void;

}


export function ListTodos ({todos, onTodoClick} : ITodoListProps) : ReactElement{

    console.log(todos);

    return (
    <section className="todo-list ">
           <div className="card-row"> 
            {todos.map(todocard => (
                <TodoCard key={todocard.id} tdcard = {todocard}  onClick={onTodoClick}/>
            ))}
            </div>
    </section>
    );
}