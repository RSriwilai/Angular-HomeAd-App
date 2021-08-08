import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Apartment } from '../models/apartment.model';

@Component({
  selector: 'app-create-apartment',
  templateUrl: './create-apartment.component.html',
  styleUrls: ['./create-apartment.component.css'],
})
export class CreateApartmentComponent implements OnInit {
  apartment: Apartment;
  rooms: any;
  kvm: any;
  datePickerConfiq: Partial<BsDatepickerConfig>;
  bsValue: Date = new Date();

  constructor() {
    this.rooms = Array.from({ length: 10 }, (v, k) => k + 1);
    this.kvm = Array.from({ length: 200 }, (v, k) => k + 1);
    this.datePickerConfiq = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(Date.now()),
        dateInputFormat: 'YYYY-MM-DD',
      }
    );
  }

  ngOnInit(): void {}
}
