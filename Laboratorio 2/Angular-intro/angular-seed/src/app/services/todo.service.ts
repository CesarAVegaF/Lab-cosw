import { Injectable } from '@angular/core';
import { Todo } from './../models/todo'; 
import { APIService } from '../common/api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService extends APIService{
  private resourceUrl = 'api/todo';
  
  list(): Observable<Todo[]> {
    return this.get(this.resourceUrl);
  }

  create(description: string, priority: Number, completed: boolean): Observable<Todo[]>  {
	return this.post(this.resourceUrl, new Todo(description, priority, completed));
  }

}
