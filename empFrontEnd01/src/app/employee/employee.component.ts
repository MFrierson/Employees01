import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title: string;
  posts:Post[];



  constructor(private dataService:DataService) {

   }

  ngOnInit() {
    this.title = 'Big Pimpin';


    this.dataService.getPosts().subscribe((posts) => {  
      this.posts = posts;
   });
    
  }


}

interface Post{
  id: number;
  name: string;
  designation: string;
  expertise: string;
}