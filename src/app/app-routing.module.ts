import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TransactionsComponent } from './components/pages/transactions/transactions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'TransactionsComponent', component: TransactionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
