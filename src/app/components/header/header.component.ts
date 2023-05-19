import { Component } from '@angular/core';

/* fontawesome imports */
import { faL, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faUser = faUser;
  faBell = faBell;

  
}
