/* Angular imports */
import { Component } from '@angular/core';

/* Aplication imports */
import { transactionType } from '../../types/transactionsType';
import { allTransactions } from '../../data/transactions';

import { formatDate } from '../../helpers/dateFilter';

/* imports fontawesome */
import {
  faArrowLeft,
  faArrowRight,
  faScaleBalanced,
  faArrowUp,
  faArrowDown,
  faTrash,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';



import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  /* fontawesome-icons */
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;;
  faScaleBalanced = faScaleBalanced;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faTrash = faTrash;
  faCircleCheck = faCircleCheck;

  //attributes
  listItems = allTransactions;
  filteredList: Array<transactionType> = [];
  formulario!: FormGroup;
  getFormatedDate = formatDate(new Date())
  
  modalContainer = 'modal-container';
  

  //Angular Methods
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      formTitle: ['', [Validators.required, Validators.minLength(3)]],
      formAmount: [null, [Validators.required, Validators.minLength(1)]],

    })

    this.updateValues()
    
  }


  /* methods */

  generateRandomId() {
    const generateId = Math.round(Math.random() * 1000)
    return generateId;
  }



  transactionTypes() {
    return this.formulario.value.formAmount < 0 ? 'expense' : 'income';
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

    this.transactionTypes()
    
    return { income, expense, Total }
  }

  submitForm() {

    if (this.formulario.value.formTitle === '' || this.formulario.value.formAmount === null) {
      alert('Preencha Todos os Campos!')
      return
    }

    const transaction = {
      id: this.generateRandomId(),
      date: new Date(2023, 4, 2),
      category: 'General',
      title: this.formulario.value.formTitle,
      amount: this.formulario.value.formAmount,
      modelTransactions: this.transactionTypes()
    }
    this.listItems.push(transaction)
    this.formulario.reset();

    
    
  }

  

}
