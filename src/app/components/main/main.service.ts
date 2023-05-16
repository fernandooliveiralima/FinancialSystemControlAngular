import { EventEmitter, Injectable } from '@angular/core';


import { allTransactions } from '../../data/transactions'
import { currentMonth } from '../../helpers/dateFilter'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  

  listItems = allTransactions;
  getCurrentMonth = currentMonth()
  myItems = [this.listItems, this.getCurrentMonth]

  deleteItem(id: number) {
    const index = this.listItems.findIndex(item => item.id === id)
    if (index !== -1) {
      this.listItems.splice(index, 1)
      this.updateValues()

    }
  }

  updateValues() {
    const transactionsAmounts = this.listItems.map((transaction) => transaction.amount)
    const Total = transactionsAmounts
      .reduce((accumulator, transaction) => accumulator + transaction, 0)

    const income = transactionsAmounts
      .filter((value) => value > 0)
      .reduce((accumulator, value) => accumulator + value, 0)

    const expense = transactionsAmounts
      .filter((value) => value < 0)
      .reduce((accumulator, value) => accumulator + value, 0)
    
    console.log(this.myItems);
    
    return { income, expense, Total }
  }

  getListItems() {
    return this.listItems;
  }
  setListItems(items: Array<any>) {
    this.listItems = items
    this.updateValues()
  }

  

}
