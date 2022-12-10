import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  registerUser=(dataToSend:any)=>{return this.http.post("http://localhost:8080/userregister",dataToSend)}
  searchUser=(dataToSend:any)=>{return this.http.post("http://localhost:8080/usersearch",dataToSend)}
  getUserDetailsById=(dataToSend:any)=>{return this.http.post("http://localhost:8080/userbyid",dataToSend)}

  addUserComplaint=(dataToSend:any)=>{return this.http.post("http://localhost:8080/addUserComplaint",dataToSend)}
}
