import { Component } from '@angular/core';

import { allTransactions } from '../../../data/transactions'


/* imports fontAwesome */
import { faTrash } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  /* Angular Methods */

  /* fontawesome-icons */
  faTrash = faTrash

  /* Attributes */
  listItems = allTransactions
  

  /* Methods */
  
    
}
