import { Component, OnInit } from '@angular/core';
import { ApitaskService } from "../../services/apitask.service";
import { Task } from "../../models/task";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tareasEncontradas: any[]=[];
  constructor(private apiTaskService: ApitaskService) { }
  check = new FormControl();

  

  getTasks(){
    this.apiTaskService.getTasks().subscribe( (res) => {this.tareasEncontradas=(res)})
  }

  // editTask(algo:number, newTask:any){
  //   this.apiTaskService.editTasks(algo, newTask)
  //   console.log('edit '+algo)
  // }

  deleteTask(algo:string){
    this.apiTaskService.deleteTasks(algo).subscribe(
      res => {
        location.reload()
        console.log(res)},
      err => console.error(err)
    );
  }

  ngOnInit(): void {
    this.getTasks()
  }

}
