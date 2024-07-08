import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  tema:string = 'dark'
  imgButton:string = ''

  constructor(private themaService: ThemeService) { }

  ngOnInit(): void {
    this.themaService.tema$.subscribe(theme => {
      this.tema = theme
    })
    this.imgButton = 'assets/dark.png'
  }

  updateThema(): void {
    this.themaService.setTheme()
    this.setButtonImage()
  }

  setButtonImage() {
    if(this.tema == 'dark') {
      this.imgButton = 'assets/dark.png'
    }else if(this.tema == 'light') {
      this.imgButton = 'assets/light.png'
    }
  }

}
