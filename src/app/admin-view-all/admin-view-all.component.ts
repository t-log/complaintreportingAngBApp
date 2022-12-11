import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-view-all',
  templateUrl: './admin-view-all.component.html',
  styleUrls: ['./admin-view-all.component.css']
})
export class AdminViewAllComponent {
  complaintData:any=[]
  constructor(private api:ApiService){
    api.adminViewAll().subscribe(
      (response)=>
      {
      this.complaintData = response;
      console.log(this.complaintData);
      
      }
      )
  }
}
