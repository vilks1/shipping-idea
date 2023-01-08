import {NgModule} from "@angular/core";
import {CountryService} from "./services/country.service";
import {CountrySelectComponent} from "./country-select/country-select.component";
import {HttpClientModule} from "@angular/common/http";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    CountrySelectComponent
  ],
  imports: [
    HttpClientModule,
    MatOptionModule,
    MatSelectModule,
    CommonModule,
  ],
  providers: [CountryService],
  exports: [CountrySelectComponent]
})
export class CountryModule { }
