export interface IDropdown {       //object interface for controlling dropdown options
    id: string;
    label: string;
    value: string;
  }



export interface ITodo    //object interface for pre-loaded and future todo cards

{
    id: number;
    date: string;
    title: string;
    description: string;
    author: string;
    priority: string; 
    completed: boolean;
}