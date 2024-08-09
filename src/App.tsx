import { ReactElement, useState } from "react";
import { AddTodo, ListTodos, preloadedtodos} from "./components/index";
import { ITodo } from "./components/interfaces";









export function App() : ReactElement {

const [todocards, setTodocards] = useState<ITodo[]>(preloadedtodos);

const addTodo = (todocard: ITodo) => {
  setTodocards([todocard, ...todocards])
};

const handleOnClick = (todo: ITodo): void => {
  setTodocards(todocards.filter((t) => t.id !== todo.id));
};



return (

        <>
        <AddTodo addTodo = {addTodo}/>
        <ListTodos todos = {todocards} onTodoClick={handleOnClick}/>
        </>
    );
 
  
}
