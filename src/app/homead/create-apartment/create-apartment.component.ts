import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Apartment } from '../models/apartment.model';

@Component({
  selector: 'app-create-apartment',
  templateUrl: './create-apartment.component.html',
  styleUrls: ['./create-apartment.component.css'],
})
export class CreateApartmentComponent implements OnInit {
  counter(i: number) {
    return new Array(i);
  }

  apartment: Apartment;

  datePickerConfiq: Partial<BsDatepickerConfig>;
  bsValue: Date = new Date();

  constructor() {
    this.apartment = {
      id: null,
      address: null,
      city: null,
      rooms: null,
      kvm: null,
      rentalCost: null,
      availableDate: null,
      publicationDate: null,
      photoUrl: null,
    };
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

  saveApartment(apartmentForm: NgForm): void {
    console.log(apartmentForm.value);
  }
}
