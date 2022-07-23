import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private api:ApiService) {
    api.viewcourses().subscribe(
      (response)=>
      {
        this.data=response
      }
    )
   }
data:any=[]
  ngOnInit(): void {
  }

}
