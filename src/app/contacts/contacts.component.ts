import { Component, OnInit,VERSION } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts = [];
  headers;
  constructor(private http: Http, private router:Router) {
    this.headers = new Headers();
    this.headers.append('key', 'ABCD');
    this.refreshList();
    console.log('version '+VERSION.full)
  }



  refreshList() {
    this.http.get('https://zenways-contact.herokuapp.com/api/contacts', { headers: this.headers }).subscribe(
      res => {
        console.log(res.json());
        this.contacts = res.json().contacts;
      }
    );
  }

  ngOnInit() {
  }
  deleteContact(contact) {
    confirm('Are you sure') && this.http.delete('https://zenways-contact.herokuapp.com/api/contact/' + contact._id, { headers: this.headers }).subscribe(
      res => {
        console.log(res.json());
        this.refreshList();
      }
    );
  }

  editContact(contact){
    this.router.navigate(['contact', contact._id]);
  }

}
