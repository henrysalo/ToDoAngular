import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApitaskService } from "../../../services/apitask.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(private apiTaskService: ApitaskService) { }

  ngOnInit(): void {
  }
  
  title = new FormControl('', Validators.minLength(10))
  form = new FormGroup({
    title : new FormControl('', Validators.minLength(10)), 
    description : new FormControl('')});

  onSubmit(): void {
    this.createTask({
      title:this.form.value.title, 
      description: this.form.value.description,
      userId: "1",
      createdAt: new Date
    });
  }

  createTask(newTask:any){
    this.apiTaskService.createTask(newTask).subscribe(
      res => {
        location.reload()
        console.log(res)},
      err => console.error(err)
    );
  }

  setValue($event?:any) {
    $event.preventDefault()
    this.form.setValue({title: '', description: ''});
  }
}
