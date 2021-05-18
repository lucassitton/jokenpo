import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
 x : number;
  
  constructor() { }

  ngOnInit() {
    this.x = Math.floor(Math.random()*9999);
    
  }

}
