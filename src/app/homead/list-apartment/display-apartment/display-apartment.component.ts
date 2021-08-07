import { Component, Input, OnInit } from '@angular/core';
import { Apartment } from '../../models/apartment.model';

@Component({
  selector: 'app-display-apartment',
  templateUrl: './display-apartment.component.html',
  styleUrls: ['./display-apartment.component.css'],
})
export class DisplayApartmentComponent implements OnInit {
  @Input() apartments: Apartment[];

  constructor() {}

  ngOnInit(): void {}
}
