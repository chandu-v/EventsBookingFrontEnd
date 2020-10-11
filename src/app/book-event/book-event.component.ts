import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventClass } from '../event';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.css']
})
export class BookEventComponent implements OnInit {

  id;
  event:EventClass = new EventClass();
  constructor(private route:ActivatedRoute,private service:EventServiceService,private router:Router) { }

  name;
  email;
  phone;
  number_of_seats;
  second_attendee;
  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      console.log(data['event_id']);
      this.id = data['event_id'];
      
      this.service.getEventsById(this.id).subscribe((data)=>{
        this.event = data[0];
        console.log(this.event);
      });
      
    })

    //  #form="ngForm"
    
  }
  onSubmit(){
    console.log("Submitted");
    if(this.name == undefined  ||  this.email  ==  undefined 
    ||  this.phone  ==  undefined  ||  this.second_attendee  ==  undefined
    ||  this.number_of_seats  ==  undefined){
      console.log("Name:"+this.name);
      console.log("Email:"+this.email);
      console.log("Phone:"+this.phone);
      console.log("Second Attendee"+this.second_attendee);
      console.log("Number_Of Seats"+this.number_of_seats);
      alert("All fields are mandatory");
    }else{
      
      let updatedSeats = this.event.seats - this.number_of_seats;
      this.service.updateEventDetails(this.id,updatedSeats).subscribe((data)=>{
        console.log(data);
        this.router.navigateByUrl(``);
      })
    }
   
  }

}
