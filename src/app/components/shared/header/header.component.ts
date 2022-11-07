import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public imgSrc: string = 'assets/img/logo2.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
