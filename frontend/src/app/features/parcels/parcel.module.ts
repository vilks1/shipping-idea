import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {ListComponent} from "./components/list/list.component";
import {ParcelService} from "./services/parcel.service";
import {CountryModule} from "../country/country.module";

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatInputModule,
    MatTableModule,
    CountryModule,
  ],
  providers: [ParcelService],
  bootstrap: []
})
export class ParcelModule { }
