import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public listUsers(): Observable<Array<Users>> {
    this.httpClient.get(`${environment.baseUrl}/users`)
  }
}
