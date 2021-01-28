import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {baseUrl} from '../data/link';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = baseUrl;

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}/users`);
  }
  getUserById(id): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/users/${id}`);
  }
}
