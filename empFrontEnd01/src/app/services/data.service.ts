import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {


  constructor(public http:Http) { 
    
  }

  getPosts(){
    return this.http.get('/company/employees')
     .map(res => res.json());
  }

  getOneEmp(id){
    return this.http.get('/company/employees/'+ id)
      .map(res => res.json());
  }

  addOneEmp(emp){
    return this.http.post('/company/employees',emp)
      .map(res => res.json());
  }

  deleteOneEmp(id){
    return this.http.delete('/company/employees/'+ id)
  }

}
