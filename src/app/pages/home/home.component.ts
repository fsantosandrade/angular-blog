import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './mediaquery.component.css']
})
export class HomeComponent implements OnInit {
  tema:string = 'dark'

  constructor() { }

  ngOnInit(): void {
  }

  alterarTema() {

  }

}
