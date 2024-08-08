import { useState } from "react";
import { ReactElement } from "react";
import { AddTodo, ListTodos} from "./index";
import { preloadedtodos } from "./components/data";
import { ITodo } from "./components/interfaces";









export function App() : ReactElement {

const [todocards, setTodocards] = useState<ITodo[]>(preloadedtodos);

const addTodo = (todocard: ITodo) => {setTodocards([todocard, ...todocards])
};



return (

        <>
        <ListTodos todos = {todocards}/>
        <AddTodo addTodo = {addTodo}/>

    
    
    
    
    
        </>



    );
 
  
}
