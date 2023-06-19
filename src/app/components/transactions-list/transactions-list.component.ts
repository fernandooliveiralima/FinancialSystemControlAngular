/* Angular Imports */
import { Component, Input } from '@angular/core';

/* Font Awesome Imports */
import { faTrash } from '@fortawesome/free-solid-svg-icons'

/* App Imports */
import { allTransactions } from '../../data/transactions'
import { formatDate, currentMonth } from '../../helpers/dateFilter'
import { MainService } from '../../components/main/main.service'
import { transactionType } from '../../types/transactionsType';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent {

  /* Angular Methods */
  constructor(private mainService: MainService) { }

  ngOnInit() { }

  /* fontawesome-icons */
  faTrash = faTrash

  /* Attributes */
  listItems = allTransactions;
  filteredList: Array<transactionType> = [];
  getCurrentMonth = currentMonth()
  getFormatedDate = formatDate(new Date());

  mappedItems = this.listItems.map((transaction) => transaction.amount)
  modelItems = this.listItems.map((model) => model.modelTransactions)

  currentMonthIndex = new Date().getMonth();
  currentYear = new Date().getFullYear();
  months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  /* Methods */
  callDeleteIdItem(id: number) {
    this.mainService.deleteItem(id)
  }

  get currentMonth() {
    return this.months[this.currentMonthIndex];
  }

  get filteredListTransactions() {
    const targetMonth = this.currentMonthIndex;
    return this.listItems.filter((obj) => {
      const objMonth = new Date(obj.date).getMonth() + 1;
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

}
  