import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {

  events;
  constructor(private service:EventServiceService) { }

  ngOnInit(): void {
    this.service.getEvents().subscribe((data)=>{
      console.log(data);
      this.events = data;
    })
  }

}
