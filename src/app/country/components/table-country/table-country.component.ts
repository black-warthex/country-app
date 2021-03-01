import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html'
})
export class TableCountryComponent implements OnInit {

  @Input() countries: Country[] = [];

  constructor() { }

  ngOnInit(): void { }

}
