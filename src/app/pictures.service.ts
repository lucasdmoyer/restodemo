import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor(private http: HttpClient) { }

  private pictureUrl = 'api/pictures';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPictures(): Observable<any[]> {
    return this.http.get<any[]>(this.pictureUrl)
      .pipe(
        tap(_ => this.log('got the pictures')),
        catchError(this.handleError('getPictures', []))
      );
  }

  private log(message: string) {
    console.log(message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`$(operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
