import { Component, OnInit } from '@angular/core';
import { StockService, StockResponse } from '../../services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks: StockResponse[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.loadStocks();
  }

  loadStocks() {
    this.stockService.getAll().subscribe(data => {
      this.stocks = data;
    });
  }

  deleteStock(id: number) {
    this.stockService.delete(id).subscribe(() => {
      this.loadStocks(); // refresh list
    });
  }
}
