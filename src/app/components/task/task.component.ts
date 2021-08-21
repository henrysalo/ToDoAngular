import { Component, OnInit } from '@angular/core';
import { ApitaskService } from "../../services/apitask.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tareasEncontradas: any[]=[];
  idQuest:string='';
  constructor(private apiTaskService: ApitaskService) { }
  check = new FormControl();
  activar:boolean=false

  getTasks(){
    this.apiTaskService.getTasks().subscribe( (res) => {this.tareasEncontradas=(res)})
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
