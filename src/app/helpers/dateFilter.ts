
export const formatDate = (date: Date): string =>{
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    return `${formatedDayMonth(day)}/${formatedDayMonth(month)}/${year}`;
}

const formatedDayMonth = (Number: number): string => Number < 10 ? `0${Number}` : `${Number}`;
