import { ReactElement } from "react"





export function Timestamp (): ReactElement{

    const timestamp: number = Date.now();
    const date = new Date(timestamp);

    console.log(date.getDate.toString);

    return <Timestamp timestamp = {Date} />
}