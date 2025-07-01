import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent} from '../icons/icons.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, IconsComponent, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  currentIcon: string = 'nav_home';
  isCollapsed = false;
  isEnabled: boolean = false;

  toggleIcon() {
    this.isEnabled = !this.isEnabled;
    this.currentIcon = this.isEnabled ? 'icon-home-enabled' : 'icon-home';
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}