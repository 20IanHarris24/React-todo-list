import { ReactElement } from "react";

import { TodoCard } from ".";
import { ITodo } from "../support/interfaces";


interface ITodoListProps{

    cards : ITodo[];
}



export function TodoList ({cards} : ITodoListProps) : ReactElement{

    console.log(cards);

    return (
    <section className="todoframe container col">
           <div className="card-row"> 
            {cards.map(card => (<TodoCard key={card.id} card = {card}/>))
            }
            </div>
    </section>
    );
}