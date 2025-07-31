import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly THEME_KEY = 'pino_theme';
  private isBrowser: boolean;
  private availableThemes = [
    'pino-blue',
    'pino-red', 
    'pino-green',
    'pino-pink',
    'pino-yellow'
  ];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.initializeTheme();
  }

  private initializeTheme() {
    if (this.isBrowser) {
      const savedTheme = this.isBrowser ? localStorage.getItem(this.THEME_KEY) : null;
      const defaultTheme = this.availableThemes[0];
      this.applyTheme(savedTheme || defaultTheme);
    }

  }


  getThemes() {
    return this.availableThemes;
  }

  getCurrentTheme() {
    if (this.isBrowser) {
      return localStorage.getItem(this.THEME_KEY) || this.availableThemes[0];
    } else {
      return this.availableThemes[0];
    }
  }

  

  applyTheme(themeName: string) {
    const theme = this.availableThemes.includes(themeName) ? themeName : this.availableThemes[0];
    
    
    if (this.isBrowser) {
      document.documentElement.style.setProperty('--main-bg', `var(--${theme})`);
      localStorage.setItem(this.THEME_KEY, theme);
      
      if (themeName == "pino-pink" || themeName == "pino-yellow") {
        document.documentElement.style.setProperty('--main-text', `var(--pino-black)`);
        localStorage.setItem('--main-text', `var(--pino-black)`);
      }
      else {
        document.documentElement.style.setProperty('--main-text', `var(--pino-white)`);
        localStorage.setItem('--main-text', `var(--pino-white)`);
      }
        }

  }


}
