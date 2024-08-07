/* import { TodoList } from "./components"; */
import { Addtodo } from "./components";





export function App() {
  return (
    <>
    {/* <TodoList cards={cards}/> */}
    <Addtodo addTodo={Addtodo}/>

      {/* <h1>This is the App component</h1> */}
    </>
  );
}
