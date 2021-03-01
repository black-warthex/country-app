import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  word = '';
  isError = false;
  countries: Country[] = [];

  constructor(private service: CountryService) { }

  autoComplete(termino: string): void {
    this.isError = false;
  }

  search(search: string): void {
    this.isError = false;
    this.word = search;
    this.service.searchByCapital(search).subscribe(
      response => {
        this.countries = response;
      },
      error => {
        this.isError = true;
        this.countries = [];
      }
    );
  }



}
