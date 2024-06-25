import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.css']
})
export class BaseCardComponent implements OnInit {

  @Input()
  photoCover:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&s'
  @Input()
  cardTitle:string = 'Loading...'
  @Input()
  cardDescription:string = 'Loading...'
  @Input()
  id:string = '0'

  constructor() { }

  ngOnInit(): void {
  }

}
