import { Component, VERSION } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  currentDate = new Date();
  user = {
    user: 'zendy',
    age: 27
  }

  // time = 0;
  // interval$ = interval(1000);

  // ngOnInit() {
  //   this.interval$.subscribe(val => {
  //     this.time = val;
  //   })
  // }

  interval$ = interval(1000);

  addr = {
    address1: "123 Some St",
    address2: "Thanh Khe",
    city: "Hai Duong",
    state: "State",
    zip: "123",
    country: "VN"
  }

  users = [
    {
      name: "Tiep Phan",
      age: 30
    },
    {
      name: "Trung Vo",
      age: 28
    },
    {
      name: "Chau Tran",
      age: 29
    },
    {
      name: "Tuan Anh",
      age: 16
    }
  ];

  addUser() {
    // this.users = [...this.users, { name: 'New User', age: 30 }] // if not pure
    this.users.push({ name: 'New User', age: 30 })
  }

  formatAddress(addr) {
    console.log('function run', addr)
    return addr.address1 +
      " " +
      addr.address2 +
      ", " +
      addr.city +
      ", " +
      addr.state +
      " " +
      addr.zip +
      ", " +
      addr.country;
  }
}
