import { Component, Input, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/shared/apartment.service';
import { Apartment } from '../models/apartment.model';

@Component({
  selector: 'app-list-apartment',
  templateUrl: './list-apartment.component.html',
  styleUrls: ['./list-apartment.component.css'],
})
export class ListApartmentComponent implements OnInit {
  apartments: Apartment[];

  constructor(private _apartmentService: ApartmentService) {}

  ngOnInit(): void {
    this.viewApartments();
  }

  viewApartments() {
    this._apartmentService.getApartments().subscribe((apartmentList) => {
      this.apartments = apartmentList;
      console.log(this.apartments);
    });
  }
}
