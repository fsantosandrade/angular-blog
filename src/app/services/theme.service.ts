import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private temaSubject = new BehaviorSubject<string>('dark')
  tema$ = this.temaSubject.asObservable()

  constructor() { }

  setTheme() {
    if(this.temaSubject.value == 'dark'){
      this.temaSubject.next('light')
    }else if(this.temaSubject.value == 'light') {
      this.temaSubject.next('dark')
    }

    this.updateGblobalTheme(this.temaSubject.value)
  }

  updateGblobalTheme(theme: string): void {
    document.body.className = ''
    document.body.classList.add(theme)
  }
}
