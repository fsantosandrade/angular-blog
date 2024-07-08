import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  tema:string = ''

  photoCover:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&s'
  contentTitle:string = 'Loading...'
  contentDescription:string = 'Loading...'
  private id:string | null = '0'

  constructor(
    private route: ActivatedRoute, private themeService: ThemeService
  ) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
      this.id = value.get('id')
    )

    this.setValuesToComponent(this.id)

    this.themeService.tema$.subscribe(theme => {
      this.tema = theme
    })
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id.toString() == id)[0]

    if(result != null) {
      this.photoCover = result.photo
      this.contentTitle = result.title
      this.contentDescription = result.description
    }else {
      alert('Conteúdo não encontrado!')
    }
  }
}
