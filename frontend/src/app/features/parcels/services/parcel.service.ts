import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {Parcel} from "../dto/parcel.dto";
import {ParcelFilterDto} from "../dto/parcel.filter.dto";
import {environment} from "../../../../environment/environment";

@Injectable({
  providedIn: 'root',
})
export class ParcelService {
  constructor(private http:HttpClient) {}

  findParcels(filter: ParcelFilterDto): Observable<Parcel[]> {
    let params = new HttpParams();
    if (filter.description) {
      params = params.append('description', filter.description);
    }
    if (filter.country) {
      params = params.append('country', filter.country);
    }
    return this.http.get<Parcel[]>(`${environment.shippingApi}/parcels`, { params });
  }
}