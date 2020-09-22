import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}

  title = 'promotions';
  ngOnInit() {
  this.appService.getPromotions().subscribe((res)=>{
    console.log(res);
  })
  }
}
