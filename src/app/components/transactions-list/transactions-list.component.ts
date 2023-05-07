import { Component } from '@angular/core';


import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { allTransactions } from '../../data/transactions'
import {MainService} from '../../components/main/main.service'


@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent {
 

  /* Angular Methods */
  constructor(private mainService: MainService){}
  
  ngOnInit(){ 
    
    
  }
  /* fontawesome-icons */
  faTrash = faTrash

  /* Attributes */
listItems = allTransactions
mappedItems = this.listItems.map((transaction) => transaction.amount)
id!: number

  /* Methods */
  callDeleteIdItem(id: number){
    this.mainService.deleteItem(id)
  }
}