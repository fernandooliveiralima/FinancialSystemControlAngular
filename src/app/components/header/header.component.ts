import { Component } from '@angular/core';

/* fontawesome imports */
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faUser = faUser;
  faBell = faBell;

}
  