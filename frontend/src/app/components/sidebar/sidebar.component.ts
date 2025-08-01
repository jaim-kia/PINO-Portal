import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent} from '../icons/icons.component';
import { ProfileSettingsComponent } from '../profile-settings/profile-settings.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, IconsComponent, RouterModule, ProfileSettingsComponent, NotificationsComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class SidebarComponent implements OnInit {

  isCollapsed = false;

  navItems = [
    {id: 'home', active: false, title: 'Home', category: 'general'},
    {id: 'inbox', active: false, title: 'Inbox', category: 'general'},
    {id: 'calendar', active: false, title: 'Calendar', category: 'general'},
    {id: 'directory', active: false, title: 'Directory', category: 'general'},
    {id: 'forms', active: false, title: 'Forms', category: 'general'},
    {id: 'todo', active: false, title: 'To-do List', category: 'workspace'},
    {id: 'notes', active: false, title: 'Personal Notes', category: 'workspace'},
    {id: 'links', active: false, title: 'Client Links', category: 'workspace'},
  ];

  constructor(private router: Router, private themeService: ThemeService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url;
        console.log(this.router.url);
        
          for (const item of this.navItems) {
            if (currentUrl.startsWith(`/${item.id}`)) {
              item.active = true;
            } else {
              item.active = false;
            }
          }
      }
    });
  }

  ngOnInit() {
    const currentTheme = this.themeService.getCurrentTheme();
    this.themeService.applyTheme(currentTheme);
  }
  

  toggleIcon(target:string) {
    this.router.navigate(['/' + target]);
  }

  isActive(id: string): boolean {
    return this.navItems.find(item => item.id === id)?.active || false;
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  showSettings = false;

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }

  showNotifs = false;
  @ViewChild('notificationsTrigger') notificationsTrigger!: ElementRef;
  notificationPosition = { top: '0', left: '0' };

  toggleNotifs() {
    this.showNotifs = !this.showNotifs;
    
    if (this.showNotifs) {
      this.calculatePosition();
    }
  }

  calculatePosition() {
    const triggerEl = this.notificationsTrigger.nativeElement;
    const rect = triggerEl.getBoundingClientRect();
    if (!this.isCollapsed) {
      this.notificationPosition = {
        top: `${rect.bottom*1.3}px`,
        left: `${rect.left/3}px`
      };
    } else {
      this.notificationPosition = {
        top: `${rect.top/2}px`,
        left: `${rect.left*4}px`
      }
    }
  }
  onNotificationsClosed() {
    this.showNotifs = false;
  }

}