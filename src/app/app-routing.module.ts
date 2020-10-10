import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookEventComponent } from './book-event/book-event.component';
import { ViewEventsComponent } from './view-events/view-events.component';


const routes: Routes = [
  { path: '',component: ViewEventsComponent},
  { path: 'register/:event_id',component: BookEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
