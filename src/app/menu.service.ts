import { Injectable } from '@angular/core';
import { MenuItem } from './menuitem';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  private menuUrl = 'api/menu';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.menuUrl)
      .pipe(
        tap(_ => this.log('got the menu')),
        catchError(this.handleError('getMenu', []))
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
