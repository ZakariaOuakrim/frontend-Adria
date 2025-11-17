import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService, CompanyRequest } from '../../services/company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  company: CompanyRequest = { name: '', domain: '', currentStockPrice: 0 };
  id!: number;

  constructor(private route: ActivatedRoute,
              private companyService: CompanyService,
              private router: Router) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.companyService.getById(this.id).subscribe(c => {
      this.company = { name: c.name, domain: c.domain, currentStockPrice: c.currentStockPrice };
    });
  }

  submitForm() {
    this.companyService.update(this.id, this.company).subscribe(() => {
      this.router.navigate(['/companies']);
    });
  }
}
