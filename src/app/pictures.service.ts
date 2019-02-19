import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  pictureCollection: AngularFirestoreCollection<any>;
  pictures: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.pictureCollection = afs.collection<any>('pictures');
    this.pictures = this.pictureCollection.valueChanges();
  }


  getPictures(): Observable<any[]> {
    return this.pictures;
  }
}
