import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = 'http://localhost:8080/users'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/create`, user)
  }

  updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/update/${user.id}`, user)
  }

  deleteUser(userId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/delete/${userId}`)
  }
}
