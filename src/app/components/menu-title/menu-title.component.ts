import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit {
  tema:string = ''

  constructor(private themaService: ThemeService) { }

  ngOnInit(): void {
    this.themaService.tema$.subscribe(theme => {
      this.tema = theme
    })
  }

}
