import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = new FormControl('');
  last = new FormControl('');
  contrasena1 = new FormControl('');
  contrasena2 = new FormControl('');
  check = new FormControl();


  updateName() {
    this.name.setValue('Nancy');
  }
}
