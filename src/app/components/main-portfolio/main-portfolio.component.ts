import { Component } from '@angular/core';

@Component({
  selector: 'app-main-portfolio',
  templateUrl: './main-portfolio.component.html',
  styleUrls: ['./main-portfolio.component.css']
})
export class MainPortfolioComponent {


  projects:project[] = [
    {
      url:'https://github.com/AbdulRehmanjr/secuirty-2.0',
      image:'../../../assets/projects/secuirty.png'
    },
    {
      url:'https://github.com/AbdulRehmanjr/micro-service-practice',
      image:'../../../assets/projects/microservice.png'
    },{
      url:'https://github.com/AbdulRehmanjr/blob-backend',
      image:'../../../assets/projects/blob.png'
    }
  ]             
}
interface project{
  url:string
  image:string
}
