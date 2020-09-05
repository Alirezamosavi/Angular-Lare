import { Component, OnInit } from '@angular/core';
import { Task } from './Task';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    providers: [TasksService]
  })
  export class TasksComponent implements OnInit {
    title = 'my-app';
    tasks: Task[]
    editTask: Task

// in this page there are all of function to add edit and show and delete

    constructor(private taskService: TasksService){}

    ngOnInit(){
        this.getTasks()
    }

  //   void
  //    Similar to languages like Java, void is used where there is no data. 
	//  For example, if a function does not return any value 
	//  then you can specify void as return type.

  // subscribe()	 
	//  In Angular (currently on Angular-6) . subscribe() is a method on the Observable type. 
	//  The Observable type is a utility that asynchronously or synchronously 
	//  streams data to a variety of components or services that have subscribed to the observable.
    getTasks():void{
        this.taskService.getTasks().subscribe(tasks => {
            this.tasks= tasks;
            console.log(tasks)
        });
    }


    // undefined

  //   isUndefined() function in AngularJS is used to determine the value inside isUndefined function is undefined or not. 
	// It returns true if the reference is undefined otherwise returns false.
	// Return Value: It returns true if the value passed is undefined else returns false. ... date1 is Undefined."	     

    add(title:string):void{
        this.editTask= undefined
        title= title.trim()
        if(!title){
            return
        }

        const newTask:Task= {title} as Task
        this.taskService.addTask(newTask).subscribe(task => this.tasks.push(task))
    }

    delete(task:Task):void{
        this.tasks= this.tasks.filter(h => h !==task)
        this.taskService.deleteTask(task.id).subscribe()
    }
    
    edit(task){
        this.editTask = task
    }

    update(){
        if(this.editTask){
            this.taskService.updateTask(this.editTask).subscribe(task => {
                const ix= task ? this.tasks.findIndex(h => h.id === task.id) : -1
                if(ix > -1){
                    this.tasks[ix]= task
                }
            })
            this.editTask = undefined
        }
    }
  }


