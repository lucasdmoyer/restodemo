import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo, catchError } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class MessagingService {
  userCollection: AngularFirestoreCollection<any>;
  users: Observable<any[]>;
  payload: any;
  currentMessage = new BehaviorSubject(null);

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient,
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging) {
      this.angularFireMessaging.messaging.subscribe(
        (_messaging) => {
          _messaging.onMessage = _messaging.onMessage.bind(_messaging);
          _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        }
      );

      this.userCollection =  afs.collection<any>('users');
      this.users = this.userCollection.valueChanges();

  }

  getUsers(): Observable<any[]> {
    return this.users;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'key=AAAALFAGDEs:APA91bEACwdhcPVD6D7rLZXKRV_i-xtEg41YcOqqQvDWf_jhHF_cEaXZpxi5e5_qjf8W_S2S4RwxIuwdeHkybPIP5lGSol2OQZ8A6hy3i-E7fK5INC_8qcy_DoyMjxvQta5w8s1kC-Km'
    })
  };

  usersUrl = "https://fcm.googleapis.com/fcm/send";

  extractData(res: Response) {
    let body = res;
    return body || {};
  }
  handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  } 

  sendMessage(message: string) {
    this.payload = {
        "notification": {
            "title": "Spagetti Lounge",
            "body": message,
            "click_action": "https://restodemo.com",
            "icon": "https://restodemo.com/assets/images/1.jpg"
        },
        "to": "dNppLg6CvwQ:APA91bEOnFDx97s6w3zlmQHMnVlatEsew0qGJLtKUC8hTuALPgcIMVpZ845zTRJwC7gGW8leVJagSQUoSX1vUECYfolslWCfYwxYuPPtBi5Xx51cb6DbBdgCLXr4zjvlHdix4HD89ROz",
        "collapse_key":"type_a",
    }
    return this.http.post(this.usersUrl, this.payload, this.httpOptions).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);  
  }

  /**
   * update token in firebase database
   * 
   * @param userId userId as a key 
   * @param token token as a value
   */
  updateToken(userId, token) {
    // we can change this function to request our backend service
    this.angularFireAuth.authState.pipe(take(1)).subscribe(
      () => {
        /*let duplicates = 0;
        let index = 0;
        console.log(this.users);
        this.users.forEach(obj => {
          if (obj[index].token == token) {
            duplicates = duplicates + 1;
            console.log(index);
          }
          index =index +1;
        })
        console.log("the final state is: " + duplicates)
        if (duplicates < 1) {
          
        }*/
        this.userCollection.add({'token':token});

        
        //this.afs.collection('users').doc(token).update(token)
      })
  }

  /**
   * request permission for notification from firebase cloud messaging
   * 
   * @param userId userId
   */
  requestPermission(userId) {
    let duplicate = false;
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        this.getUsers().subscribe(users => {
          users.forEach(obj => {
            if( obj.token == token) {
              console.log("we set it to true");
              duplicate = true;
            }
          });

          console.log("final state is " + duplicate);
          if(!duplicate) {
            this.updateToken(userId, token);
          }        
        });       
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  /**
   * hook method when new notification received in foreground
   */
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
      })
  }
  
}