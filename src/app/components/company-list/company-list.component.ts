import { Component, OnInit } from '@angular/core';
import { CompanyService, CompanyResponse } from '../../services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: CompanyResponse[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies() {
    this.companyService.getAll().subscribe(data => this.companies = data);
  }

  deleteCompany(id: number) {
    this.companyService.delete(id).subscribe(() => this.loadCompanies());
  }
}
