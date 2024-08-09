import { IDropdown, ITodo } from "./interfaces";


export const preloadedtodos: ITodo[] = [
    
    {


        id: 1,
        date: "Jul 22 2022 09:55.23",
        title: "shopping for dinner.",
        description: "buy ingredients for Porchetta.",
        priority: "high",
        completed: false,
        author: "Danny Canny",
    },

    {

        id: 2,
        date: "Jul 23 2022 13:22:16",
        title: "book bike service.",
        description: "10km service by end of the month",
        priority: "medium",
        completed: false,
        author: "Danny Canny",
    },

    {

        id: 3,
        date: "Jul 23 2022 13:35:22",
        title: "Meet with John",
        description: "suggest the dog & duck pub",
        priority: "none",
        completed: false,
        author: "Olly Wally",
    },

    {

        id: 4,
        date: "Jul 25 2022 21:40:01",
        title: "see the football game with suzy",
        description: "ring the football club for tickets",
        priority: "medium",
        completed: false,
        author: "Olly Wally",
    },
];




export const dropdownchoices: IDropdown[] = [
    {
      id: "1",
      label: "none",
      value: "none",
    },

    {
      id: "2",
      label: "low",
      value: "low",
    },

    {
      id: "3",
      label: "medium",
      value: "medium",
    },
    
    {
      id: "4",
      label: "high",
      value: "high",
    },
]