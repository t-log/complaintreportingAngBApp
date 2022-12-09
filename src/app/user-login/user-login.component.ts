import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email=""
  password=""
  searchData:any=[]
  constructor(private api:ApiService,private router:Router){}
  checkValues=()=>{
    let data = {"email":this.email,"password":this.password}
    console.log(data)
    this.api.searchUser(data).subscribe(
      (response:any)=>{
        
        if(response.status=="success"){
          let userId=response.userid;
          console.log(userId);
          localStorage.setItem("userInfo",userId)
          this.router.navigate(['/userprofile'])
        }
        else{
        //  alert("Login Failed!:(")
        alert(response.message)
        }
      }
    )
  }
}
