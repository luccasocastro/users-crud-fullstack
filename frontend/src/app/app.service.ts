import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  // Add user
  addUser(user: User){
    return this.http.post<User>(`${this.url}users/create`, user)
  }

  // Get users
  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'users')
  }

  // Get user by id
  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.url}users/${id}`)
  }

  // Update user
  updateUser(id?: number, user?: any): Observable<any>{
    return this.http.put<any>(`${this.url}users/update/${id}`, user)
  }

  // Delete user
  deleteUser(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}users/delete/${id}`)
  }
}
