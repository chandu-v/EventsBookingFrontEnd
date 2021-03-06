import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EventServiceService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get("http://localhost:3000/list").pipe(
      tap(_=>console.log(`Fetched `)),
      catchError(this.handleError(`Error Occured in FetchingData`))
    )
  }

  getEventsById(id){
    let url = `http://localhost:3000/getById/${id}`;
    console.log(url);
    return this.http.get(url).pipe(
      tap(_=>console.log(`Fetched`)),
      catchError(this.handleError(`Error`))
    )
  }

  updateEventDetails(id,seats){
    let url = `http://localhost:3000/update/${id}/${seats}`;
    console.log(url);
    return this.http.get(url).pipe(
      tap(_=>console.log(`Updated Records`)),
      catchError(this.handleError(`Error`))
    )
  }
  /**
* Handle Http operation that failed.
* Let the app continue.
* param operation - name of the operation that failed
* param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
