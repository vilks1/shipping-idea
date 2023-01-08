import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from "../dto/country";
import {environment} from "../../../../environment/environment";

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private static loadedCountries: Country[] = [];

  constructor(private http: HttpClient) {}

  async getCountries(): Promise<Country[]> {
    if (CountryService.loadedCountries.length === 0) {
      const countries = await this.http.get<Country[]>(`${environment.shippingApi}/countries`).toPromise();
      CountryService.loadedCountries = countries ?? [];
    }
    return CountryService.loadedCountries;
  }
}