import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService, CompanyRequest } from '../../services/company.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent {

  company: CompanyRequest = {
    name: '',
    domain: '',
    currentStockPrice: 0
  };

  constructor(private companyService: CompanyService,
              private router: Router) {}

  submitForm() {
    this.companyService.create(this.company).subscribe(() => {
      this.router.navigate(['/companies']);
    });
  }
}
