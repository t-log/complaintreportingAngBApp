import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  userName=""
  password=""

  constructor(private router:Router){}

  readAdminValues=()=>
  {
    let adminData:any = {"username":this.userName,"password":this.password}
    console.log(adminData)
    if (this.userName =="admin" && this.password =="12345") {
      this.router.navigate(['/admindash'])    
    }else
    {
      alert("Invalid Login")
      this.userName=""
      this.password=""
    }
  }
}
