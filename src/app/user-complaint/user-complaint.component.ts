import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-complaint',
  templateUrl: './user-complaint.component.html',
  styleUrls: ['./user-complaint.component.css']
})
export class UserComplaintComponent {
    complaint=""
    constructor(private api:ApiService,private router:Router){}
    readComplaint=()=>{
    let data = {"complaint":this.complaint,"userId":localStorage.getItem("userInfo")}
    console.log(data)
    this.api.addUserComplaint(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          alert("Complaint added");
          
          // this.router.navigate(['/'])   //viewusercomplaint
        }
        else{
        //  alert("Login Failed!:(")
        alert(response.message)
        }
      }
    )
  }
}
