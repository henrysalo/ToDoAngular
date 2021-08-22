import { Task } from './../models/task';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApitaskService {
  URL_API= 'http://localhost:3000/1';
  URL_API2= 'http://localhost:3000/';
  
  task : Task[]=[];
 
  constructor(private http: HttpClient) { }
  
  getTasks(id:string){
    return this.http.get<Task[]>(`${this.URL_API2}${id}`)
  }

  createTask(task:Task){
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    })
    return this.http.post(this.URL_API2, task, {headers});
  }

  deleteTasks(id:string){
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    })
    return this.http.delete(this.URL_API2+id, {headers})
  }

  editTasks(id:string, task:Task){
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    })
    return this.http.put<Task[]>(this.URL_API2+id,task,{headers})
  }


}
