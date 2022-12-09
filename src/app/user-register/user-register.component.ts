import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  name=""
  address=""
  phoneNo=""
  email=""
  username=""
  password=""
  confirmPassword=""

  constructor(private api:ApiService,private router:Router){}
  readValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"phoneNo":this.phoneNo,
    "email":this.email,"password":this.password,"username":this.username}
    console.log(data);
    
    this.api.registerUser(data).subscribe(
      (response:any)=>{
        console.log(response);
        if(response.status=="success")
        {
          alert("User Added Successfully")
          this.name=""
          this.address=""
          this.phoneNo=""
          this.email=""
          this.username=""
          this.password=""
          this.confirmPassword=""

        }
          
        else{
          alert("Something wrong happened!")
        }
        
      }
    )
     
  }
}
