import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {

  constructor(private http:Http) {
    var headers=new Headers()
    headers.append('key','ABCD');
    this.http.get('https://zenways-contact.herokuapp.com/api/contacts',{headers:headers}).toPromise().then((res)=>{
      console.log(res);
    })
  }

  ngOnInit() {
  }

}
