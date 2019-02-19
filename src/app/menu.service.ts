import { Injectable } from '@angular/core';
import { MenuItem } from './menuitem';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuCollection: AngularFirestoreCollection<MenuItem>;
  menu: Observable<MenuItem[]>

  constructor(private afs: AngularFirestore) {
    this.menuCollection = afs.collection<MenuItem>('menu');
    this.menu = this.menuCollection.valueChanges();
  }


  getMenu(): Observable<MenuItem[]> {
    return this.menu;
  }

  private filterMenu(term: string) {
    return this.afs.collection('menu', ref => ref.where('type', '==', term));
  }

  
}
