import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.css'
})

export class ProfileSettingsComponent {

  themes = this.themeService.getThemes();
  currentTheme = this.themeService.getCurrentTheme();

  constructor(private themeService: ThemeService) {}

  
  changeTheme(themeName: string) {
    this.themeService.applyTheme(themeName);
    this.currentTheme = themeName;
  }

  getThemeColor(themeName: string): string {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(`--${themeName}`).trim();
  }

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
