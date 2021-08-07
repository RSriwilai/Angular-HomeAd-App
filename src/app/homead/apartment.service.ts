import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Apartment } from './models/apartment.model';
import { throwError } from 'rxjs';

@Injectable()
export class ApartmentService {
  constructor(private _http: HttpClient) {}

  baseUrl = 'http://localhost:3000/apartments';

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }

    return throwError('the service is not working');
  }

  getApartments(): Observable<Apartment[]> {
    return this._http
      .get<Apartment[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }
}
