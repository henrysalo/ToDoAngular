import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items = {
    firstName: '',
    lastName: '',
    id: '',
    photoUrl: ''
  };
  addItem(newItem: any) {
    this.items = (newItem);
    console.log(Object.values(newItem));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
