import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface StockRequest {
  companyId: number;
  openValue: number;
  highValue: number;
  lowValue: number;
  closeValue: number;
  volume: number;
  date: string; // ISO string
}

export interface StockResponse {
  id: number;
  companyId: number;
  openValue: number;
  highValue: number;
  lowValue: number;
  closeValue: number;
  volume: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl = 'http://localhost:8888/stock-service/stocks';

  constructor(private http: HttpClient) {}

  getAll(): Observable<StockResponse[]> {
    return this.http.get<StockResponse[]>(this.baseUrl);
  }

  getById(id: number): Observable<StockResponse> {
    return this.http.get<StockResponse>(`${this.baseUrl}/${id}`);
  }

  getByCompany(companyId: number): Observable<StockResponse[]> {
    return this.http.get<StockResponse[]>(`${this.baseUrl}/company/${companyId}`);
  }

  getLatest(companyId: number): Observable<StockResponse> {
    return this.http.get<StockResponse>(`${this.baseUrl}/company/${companyId}/latest`);
  }

  add(stock: StockRequest): Observable<StockResponse> {
    return this.http.post<StockResponse>(this.baseUrl, stock);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
