import { Observable } from 'rxjs';
// Observable	 
// 	 Observable are just that — things you wish to observe and take action on. 
// 	 Angular uses the Observer pattern which simply means — Observable objects are registered, 
// 	 and other objects observe (in Angular using the subscribe method) them and take action 
// 	 when the observable object is acted on in some way.

import { Injectable } from '@angular/core';
// @Injectable()
//  injector can use new to create an instance.

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// HttpClient 
//  Most front-end applications need to communicate with a server over the HTTP protocol, 
//  in order to download or upload data and access other back-end services.
//  Angular provides a simplified client HTTP API for Angular applications


import { Task } from './Task';
import { catchError } from 'rxjs/operators';
// catchError
//    catchError is the changed name of catch starting from RxJS 5.5.

import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

//there are all of every things we need to service


// Angular services are singleton objects that get instantiated only 
// 	 once during the lifetime of an application. 
// 	 ... The main objective of a service is to organize and share business logic, 
// 	 models, or data and functions with different components of an Angular application.


@Injectable()
export class TasksService {
    private handleError: HandleError

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler){
        this.handleError= httpErrorHandler.createHandleError('TasksService')
    }
    
    getTasks(): Observable<Task[]>{
        return this.http
        .get<Task[]>('api/tasks')
        .pipe(catchError(this.handleError('getTasks', [])))

    }

    addTask(task : Task): Observable<Task>{
        return this.http
        .post<Task>('api/task', task)
        .pipe(catchError(this.handleError('addTasks', task)))

    }

    deleteTask(id : number): Observable<{}>{
        const url= `api/task/${id}`
        return this.http
        .delete(url)
        .pipe(catchError(this.handleError('deleteTask')))

    }

    updateTask(task : Task): Observable<Task>{
        return this.http
        .put<Task>(`api/task/${task.id}`, task)
        .pipe(catchError(this.handleError('updateTask', task)))

    }
}

