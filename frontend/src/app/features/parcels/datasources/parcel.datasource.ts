import {DataSource} from "@angular/cdk/collections";
import {Parcel} from "../dto/parcel.dto";
import {BehaviorSubject, catchError, Observable, of} from "rxjs";
import {ParcelService} from "../services/parcel.service";
import {ParcelFilterDto} from "../dto/parcel.filter.dto";

export class ParcelDataSource implements DataSource<Parcel> {

  private parcelSubject = new BehaviorSubject<Parcel[]>([]);

  constructor(private parcelService: ParcelService) {}

  connect(): Observable<Parcel[]> {
    return this.parcelSubject.asObservable();
  }

  disconnect(): void {
    this.parcelSubject.complete();
  }

  loadParcels(filter: ParcelFilterDto): void {
    this.parcelService.findParcels(filter)
      .pipe(
        catchError(() => of([])),
      )
      .subscribe(parcels => this.parcelSubject.next(parcels));
  }
}
