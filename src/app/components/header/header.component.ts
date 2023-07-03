import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/* fontawesome imports */
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

import { allTransactions } from '../../data/transactions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faUser = faUser;
  faBell = faBell;

  listItems = allTransactions;
  bellClass: string = '';
  listSubject = new BehaviorSubject(this.listItems);

  @Input() headerClass!: string;

  /* methods */


}
