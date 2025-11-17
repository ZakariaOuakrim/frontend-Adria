import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CompanyRequest {
  name: string;
  domain: string; // example: "TECH", "FINANCE", etc.
  currentStockPrice: number;
}

export interface CompanyUpdatePrice {
  currentStockPrice: number;
}

export interface CompanyResponse {
  id: number;
  name: string;
  domain: string;
  currentStockPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'http://localhost:8888/company-service/api/companies';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CompanyResponse[]> {
    return this.http.get<CompanyResponse[]>(this.baseUrl);
  }

  getById(id: number): Observable<CompanyResponse> {
    return this.http.get<CompanyResponse>(`${this.baseUrl}/${id}`);
  }

  getByDomain(domain: string): Observable<CompanyResponse[]> {
    return this.http.get<CompanyResponse[]>(`${this.baseUrl}/domain/${domain}`);
  }

  create(company: CompanyRequest): Observable<CompanyResponse> {
    return this.http.post<CompanyResponse>(this.baseUrl, company);
  }

  update(id: number, company: CompanyRequest): Observable<CompanyResponse> {
    return this.http.put<CompanyResponse>(`${this.baseUrl}/${id}`, company);
  }

  updateStockPrice(id: number, priceDTO: CompanyUpdatePrice): Observable<CompanyResponse> {
    return this.http.patch<CompanyResponse>(`${this.baseUrl}/${id}/price`, priceDTO);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
