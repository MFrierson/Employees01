import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title: string;
  posts:Post[];
  currentEmpl:Post;
  //currentID:number;
  newEmpl:Post;
  @ViewChild('f') form: any;

  constructor(private dataService:DataService) {

   }

  ngOnInit() {
    this.title = 'Big Pimpin';
    this.currentEmpl = {
      id:null,
      name: '',
      designation: '',
      expertise: ''
    }
    this.newEmpl = {
      id: null,
      name: '',
      designation: '',
      expertise: ''
    }

    this.dataService.getPosts()
      .subscribe((posts) => {  
      this.posts = posts;
    });
        
  }

  getCurrentID(emp:Post){
    //this.currentID = emp.id;
    this.dataService.getOneEmp(emp.id)
      .subscribe((emp) => {  
      this.currentEmpl = emp;
    });
  }
 
  onSubmit(){
    this.dataService.addOneEmp(this.newEmpl)
      .subscribe(empl => {
        this.posts.push(this.newEmpl);
    })
  }

  deleteCurrentPost(post) {
    for(let i = 0; i < this.posts.length; i++){
      if(this.posts[i] == post) {
        this.posts.splice(i, 1)
      }
    }
    this.dataService.deleteOneEmp(post.id)
    .subscribe()
  }

}

interface Post{
  id: number;
  name: string;
  designation: string;
  expertise: string;
}