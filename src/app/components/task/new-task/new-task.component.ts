import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApitaskService } from "../../../services/apitask.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  @Input() user: any={}; 
  tareasEncontradas: any[]=[];
  @Output() newItemEvent = new EventEmitter<any>();

  constructor(private apiTaskService: ApitaskService) { }

  ngOnInit(): void {  }
  
  title = new FormControl('', Validators.minLength(10))
  form = new FormGroup({
    title : new FormControl('', Validators.minLength(10)), 
    description : new FormControl('')});

  crarNuevaTarea(): void {
    this.createTask({
      title:this.form.value.title, 
      description: this.form.value.description,
      userId: this.user.id,
      createdAt: new Date
    });
  }

  createTask(newTask:any){
    this.apiTaskService.createTask(newTask).subscribe( (res) => {
        newTask=res
        console.log(res)},
      err => console.error(err)
    );
    this.newItemEvent.emit(newTask);
    this.addTask(newTask)
    console.log(newTask)
    this.setValue()
  }

  addTask(value:any) {value}

  setValue() {
    this.form.setValue({title: '', description: ''});
  }
}
