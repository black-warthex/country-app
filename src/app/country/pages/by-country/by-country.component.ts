import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent implements OnInit {

  word = '';
  isError = false;
  countries: Country[] = [];

  constructor(private service: CountryService) { }
  ngOnInit(): void {
  }
  autoComplete(termino:string){
    this.isError=false;
  }

  search(search: string): void  {
    this.isError = false;
    this.word = search;
    this.service.searchByCountry(search).subscribe(
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
