import { HttpClient } from '@angular/common/http';
import { Guitar } from '../models/Guitar';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../api/urls';

@Injectable({
  providedIn: 'root',
})
export class GuitarService {
  private _http: HttpClient | undefined;

  constructor(http: HttpClient) {
    this._http = http;
  }

  getGuitars(): Observable<Guitar[]> {
    return this._http!.get<Guitar[]>(
      API_URL
    );
  }
}
