import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Icons } from 'ng-bootstrap-icons/bootstrap-icons/icons.provider';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Cities } from '../../models/cities.model';
import { CITIES } from './mock-cities';

@Component({
  selector: 'app-search-apartment',
  templateUrl: './search-apartment.component.html',
  styleUrls: ['./search-apartment.component.css'],
})
export class SearchApartmentComponent implements OnInit {
  search: Icons;
  options = CITIES;
  myControl = new FormControl();
  filteredOptions: Observable<Cities[]>;
  searchTerm: any;
  constructor() {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): Cities[] {
    const filterValue = value;
    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  displayFn(city: Cities) {
    return city ? city.name : undefined;
  }

  onSearch() {
    console.log(this.myControl.value);
  }
}
