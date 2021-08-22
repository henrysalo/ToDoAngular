import { User } from './../../models/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApitaskService } from "../../services/apitask.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tareaCreada:any={};

  tareasEncontradas: any[]=[];
  idQuest:string='';
  constructor(private apiTaskService: ApitaskService) { }
  check = new FormControl();
  activar:boolean=false
  @Input() user:any={} ;

  getTasks(){
    this.apiTaskService.getTasks(this.user.id).subscribe((res) => {
      this.tareasEncontradas=(res)
    })
  }
  
  addTask(value: any) {
    this.getTasks()
  }
  editarTask(value: any) {
    this.getTasks()
  }

  deleteTask(algo:string){
    this.apiTaskService.deleteTasks(algo).subscribe(
      res => {
        this.getTasks()
        console.log(res)},
      err => console.error(err)
    );
  }

  ngOnInit(): void {
    this.getTasks()
  }

}
