import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {

  events;
  constructor(private service:EventServiceService,private router:Router) { }

  ngOnInit(): void {
    this.service.getEvents().subscribe((data)=>{
      console.log(data);
      this.events = data;
    })

  }

  buttonclicked(id:string){
      console.log("Button Clicked"+id);
      this.router.navigateByUrl(`/register/${id}`);
  }
}
