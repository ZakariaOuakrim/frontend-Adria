import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockAddComponent } from './components/stock-add/stock-add.component';
import { FormsModule } from '@angular/forms';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyAddComponent } from './components/company-add/company-add.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    StockAddComponent,
    CompanyListComponent,
    CompanyAddComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
