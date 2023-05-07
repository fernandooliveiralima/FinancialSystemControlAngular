/* Angular imports */
import {
  Component,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter
} from '@angular/core';


/* Aplication imports */
import { Category } from '../../types/category'
import { transactionType } from '../../types/transactionsType'
import { categories } from '../../data/categories'
import { allTransactions } from '../../data/transactions'
import { MainService } from './main.service'


/* imports fontawesome */
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

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

  //attributes
  listItems = allTransactions;
  filteredList: Array<transactionType> = []
  formulario!: FormGroup;

  percentualValue: number = 100
  faTrash = faTrash
  //totalItems: any;


  //Angular Methods
  constructor(private formBuilder: FormBuilder, private mainService: MainService) { }
  ngOnInit() {
    this.formulario = this.formBuilder.group({
      formTitle: [''],
      formAmount: [null],

    })
    this.listItems = this.mainService.getListItems() 
    
    this.updateValues()
  }

    
  /* methods */

  generateRandomId() {
    const generateId = Math.round(Math.random() * 1000)
    return generateId;
  }



  deleteItem(id: number) {
    this.mainService.deleteItem(id)

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
    console.log(`Total ->`,Total, `income ->`,income, `expense ->`,expense);
    
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
      category: 'Home',
      title: this.formulario.value.formTitle,
      amount: this.formulario.value.formAmount,

    }
    this.listItems.push(transaction)
    console.log(this.listItems);

  }

}