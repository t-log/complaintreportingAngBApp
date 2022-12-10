import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-complaintview',
  templateUrl: './user-complaintview.component.html',
  styleUrls: ['./user-complaintview.component.css']
})
export class UserComplaintviewComponent {
  complaintData:any=[]
  constructor(private api:ApiService){
    let data={"userId":localStorage.getItem("userInfo")}
    
    this.api.getUserComplaint(data).subscribe(
      (response:any)=>{
        console.log(response);
        this.complaintData=response
      }
    )
  }

}
