export function Timestamp(){

    const timestamp: number = Date.now();
    const date = new Date(timestamp);
    let dateString  = (date.toString().substring(3,24));
    console.log(dateString);

    return dateString;
};