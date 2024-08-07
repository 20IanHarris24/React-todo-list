export interface ITodo    //object interface for todo card

{

    id: string;
    title: string;
    description: string;
    date: string;
    priority: string;
    complete: string;
    author: string;
}

export interface IAddtodo

{
    id:number;
    title: string;
    description: string;
    author: string;
    priority: string;
    completed: boolean;
}
