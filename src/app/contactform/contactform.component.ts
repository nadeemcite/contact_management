import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  state;
  headers;
  contact;
  constructor(private http: Http, private route: ActivatedRoute,private router:Router) {
    this.state = 1;
    this.headers = new Headers();
    this.headers.append('key', 'ABCD');
    this.http = http;
    this.contact = {
      name: '',
      phno: '',
      email: '',
      address: ''
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params)
      if (params['id']) {
        this.state = 2;
        this.http.get('https://zenways-contact.herokuapp.com/api/contact/' + params['id'], { headers: this.headers }).subscribe(res => {

          this.contact = res.json().contact;
          console.log(this.contact)
        })
      }
    });
  }
  submitForm() {
    console.log(this.contact)
    var apiCall = this.http.post('https://zenways-contact.herokuapp.com/api/contact', this.contact, { headers: this.headers });
    if (this.state == 2) {
      apiCall = this.http.put('https://zenways-contact.herokuapp.com/api/contact/' + this.contact._id, this.contact, { headers: this.headers });
    }
    apiCall.subscribe(res => {
      var data=res.json();
      if(data.status){
        this.router.navigate(['']);
      }
      
    });
  }

}
