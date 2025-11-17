import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockAddComponent } from './components/stock-add/stock-add.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { CompanyAddComponent } from './components/company-add/company-add.component';

const routes: Routes = [
  { path: 'stocks', component: StockListComponent },
  { path: 'stocks/add', component: StockAddComponent },

  // Companies routes
  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/add', component: CompanyAddComponent },
  { path: 'companies/edit/:id', component: CompanyEditComponent },

  // Default route
  { path: '', redirectTo: 'stocks', pathMatch: 'full' },

  { path: '**', redirectTo: 'stocks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
