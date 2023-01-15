import { Component } from '@angular/core';

@Component({
  selector: 'app-main-portfolio',
  templateUrl: './main-portfolio.component.html',
  styleUrls: ['./main-portfolio.component.css']
})
export class MainPortfolioComponent {

  projects:string[] = [
    '../../../assets/logo/logo1.png',
    '../../../assets/logo/logo2.png',
    '../../../assets/logo/logo3.png',
    '../../../assets/logo/logo4.png',
    '../../../assets/logo/logo5.png',
    '../../../assets/logo/logo6.png',
    '../../../assets/logo/logo7.png',
    '../../../assets/logo/logo8.png',
    '../../../assets/logo/logo9.png'
                  ]
}
