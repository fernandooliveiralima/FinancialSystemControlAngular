/* Angular Imports */
import { Component } from '@angular/core';

/* Font Awesome Imports */
import { faTrash } from '@fortawesome/free-solid-svg-icons'

/* App Imports */
import { allTransactions } from '../../data/transactions'
import { formatDate } from '../../helpers/dateFilter'

import { transactionType } from '../../types/transactionsType';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent {

  /* Angular Methods */
  constructor() { }

  ngOnInit() { }

  /* fontawesome-icons */
  faTrash = faTrash

  /* Attributes */
  listItems = allTransactions;
  filteredList: Array<transactionType> = [];
  getFormatedDate = formatDate(new Date());

  currentMonthIndex = new Date().getMonth();
  currentYear = new Date().getFullYear();
  months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  /* Methods */

  get currentMonth() {
    return this.months[this.currentMonthIndex];
  }

  get filteredListTransactions() {
    const targetMonth = this.currentMonthIndex;
    return this.listItems.filter((obj) => {
      const objMonth = new Date(obj.date).getMonth();

      return objMonth === targetMonth;
    });
  }

  previousMonth() {
    this.currentMonthIndex = (this.currentMonthIndex - 1 + 12) % 12;
    this.updateFilteredList();
  }

  nextMonth() {
    this.currentMonthIndex = (this.currentMonthIndex + 1) % 12;
    this.updateFilteredList();
  }

  updateFilteredList() {
    this.filteredList = this.filteredList;
  }

  deleteItem(ID: number){
    const index = this.listItems.findIndex(item => item.id === ID)
    if(index !== -1){
      this.listItems.splice(index, 1);
      
     }
  }


}
