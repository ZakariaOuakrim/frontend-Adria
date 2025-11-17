import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StockService, StockRequest } from '../../services/stock.service';

@Component({
  selector: 'app-stock-add',
  templateUrl: './stock-add.component.html',
  styleUrls: ['./stock-add.component.css']
})
export class StockAddComponent {

  stock: StockRequest = {
    companyId: 1,
    openValue: 0,
    highValue: 0,
    lowValue: 0,
    closeValue: 0,
    volume: 0,
    date: new Date().toISOString()
  };

  constructor(private stockService: StockService,
              private router: Router) {}

  submitForm() {
    this.stockService.add(this.stock).subscribe(() => {
      this.router.navigate(['/stocks']);
    });
  }
}
