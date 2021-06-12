import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Response:any;
  doctors:any[] = []

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.ShowAllDoctors();
  }


  ShowAllDoctors(){
    this.apiservice.GetAllDoctors().subscribe(response => {
      if (response) {
        this.Response = response;
        if(this.Response['status'] == 'success'){
          this.doctors = this.Response['data'];
        }else {
          this.doctors=[];
        }
      }else {
        this.doctors=[];
      }
    },err=>{
      alert("Something wents wrong")
    })
  }
}
