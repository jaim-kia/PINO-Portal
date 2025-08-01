import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingsComponent } from '../profile-settings/profile-settings.component';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, ProfileSettingsComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  @Output() close = new EventEmitter<void>();
  @Input() position: { top: string, left: string } = { 
    top: '10px', 
    left: 'auto',
  };

  onClose() {
    this.close.emit();
  }

  showSettings = false;

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }

}
