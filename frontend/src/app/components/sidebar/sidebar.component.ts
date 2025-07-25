import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent} from '../icons/icons.component';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, IconsComponent, RouterModule, ],
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

export class SidebarComponent {

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

  constructor(private router: Router) {
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



  toggleIcon(target:string) {
    this.router.navigate(['/' + target]);
  }

  isActive(id: string): boolean {
    return this.navItems.find(item => item.id === id)?.active || false;
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}