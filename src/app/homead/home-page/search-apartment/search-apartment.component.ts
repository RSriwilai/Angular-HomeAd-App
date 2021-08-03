import { Component, OnInit } from '@angular/core';
import { Icons } from 'ng-bootstrap-icons/bootstrap-icons/icons.provider';

@Component({
  selector: 'app-search-apartment',
  templateUrl: './search-apartment.component.html',
  styleUrls: ['./search-apartment.component.css'],
})
export class SearchApartmentComponent implements OnInit {
  search: Icons;
  searchTerm: string;
  constructor() {
    this.searchTerm = '';
  }

  ngOnInit(): void {}

  searchApartment(value: string) {
    this.searchTerm += value;
    console.log(this.searchTerm);
  }
}
