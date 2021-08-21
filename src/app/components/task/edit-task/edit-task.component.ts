import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApitaskService } from "../../../services/apitask.service";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})


export class EditTaskComponent implements OnInit {
  @Input() titleOld ='';
  @Input() descriptionOld ='';
  @Input() _id ='';

  
  constructor(private apiTaskService: ApitaskService,) { }

  ngOnInit(): void {
  }

  title2 = new FormControl('', Validators.minLength(10))
  form2 = new FormGroup({
    title2: new FormControl('', Validators.minLength(10)),
    description2: new FormControl(''),
  });

  onSubmit(): void {
    this.editTask(this._id,{
      title: this.form2.value.title2, 
      description: this.form2.value.description2,
      userId: "1",
      createdAt: new Date
    });
  }
  editTask(id:string,newTask:any){
    this.apiTaskService.editTasks(id,newTask).subscribe(
      res => {
        location.reload()
        console.log(res)},
      err => console.error(err)
    );
  }
    // editTask(task:any){
    //   console.log(task)
    // }

  setValue($event:any) {
    $event.preventDefault()
    this.form2.setValue({title2: `${this.titleOld}`, description2: `${this.descriptionOld}`});
    // console.log(this.titleOld+this.descriptionOld)
  }
}
