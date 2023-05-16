import { transactionType } from '../types/transactionsType'

export const currentMonth = ()=>{
    let nowDate = new Date();
    return `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}`;
}

export const filterTransactionsByMonth = (list: Array<transactionType>, date: string): Array<transactionType>  =>{
    let newList: Array<transactionType> = [];

    let [year, month] = date.split('-');

    for(let i in list){
        if(list[i].date.getFullYear() === parseInt(year) &&
        (list[i].date.getMonth() + 1) === parseInt(month)

        ) {newList.push(list[i]) }
    }

    return newList;
}

export const formatDate = (date: Date): string =>{
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    return `${formatedDayMonth(day)}/${formatedDayMonth(month)}/${year}`;
}

const formatedDayMonth = (Number: number): string => Number < 10 ? `0${Number}` : `${Number}`;