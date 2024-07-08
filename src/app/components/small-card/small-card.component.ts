import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  tema:string = ''

  @Input()
  photoCover:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&s'
  @Input()
  cardTitle:string = 'Loading...'
  @Input()
  id:string = '0'

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.tema$.subscribe(theme => {
      this.tema = theme
    })
  }

}
