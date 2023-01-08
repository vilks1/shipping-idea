import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Country} from "../dto/country";
import {CountryService} from "../services/country.service";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
})
export class CountrySelectComponent implements OnInit {
  countries: Country[] = [];
  defaultSelectedCountry: string;

  @Output() countryValueUpdate = new EventEmitter<string>();

  constructor(private countryService: CountryService) {}

  async ngOnInit() {
    this.countries = await this.countryService.getCountries();
    const defaultCountry = this.countries.find(country => country.default);
    if (defaultCountry) {
      this.defaultSelectedCountry = defaultCountry.value;
      this.countryValueUpdate.emit(defaultCountry.value);
    }
  }

  updateValue(change: MatSelectChange) {
    this.countryValueUpdate.emit(change.value);
  }
}
