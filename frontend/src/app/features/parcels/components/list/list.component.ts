import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ParcelService} from "../../services/parcel.service";
import {ParcelDataSource} from "../../datasources/parcel.datasource";
import {debounceTime, distinctUntilChanged, fromEvent, tap} from "rxjs";
import {ParcelFilterDto} from "../../dto/parcel.filter.dto";

@Component({
  selector: 'app-parcel-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {

    dataSource: ParcelDataSource;
    displayedColumns = ['sku', 'description', 'deliveryDate', 'shippingAddress'];
    listFilterValues: ParcelFilterDto = {};

    @ViewChild('descriptionInput') descriptionInput: ElementRef;

    constructor(private parcelService: ParcelService) {}

    ngOnInit(): void {
      this.dataSource = new ParcelDataSource(this.parcelService);
    }

    setCountry(country: string) {
      this.listFilterValues.country = country;
      this.reloadList();
    }

    reloadList() {
      this.dataSource.loadParcels(this.listFilterValues);
    }

    ngAfterViewInit(): void {
      fromEvent(this.descriptionInput.nativeElement, 'keyup')
        .pipe(
          debounceTime(150),
          distinctUntilChanged(),
          tap(() => {
            this.listFilterValues.description = this.descriptionInput.nativeElement.value;
            this.reloadList();
          })
        )
        .subscribe();
    }
}
