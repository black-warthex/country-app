import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.eu/rest/v2';
  constructor(private http: HttpClient) { }

  searchByCountry(word: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${word}`;
    return this.http.get<Country[]>(url);
  }

  searchByCapital(word: string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${word}`;
    return this.http.get<Country[]>(url);
  }

}
