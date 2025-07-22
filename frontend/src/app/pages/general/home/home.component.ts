import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from '../../../components/icons/icons.component';
import { AnnouncementBlockComponent } from '../../../components/announcement-block/announcement-block.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,IconsComponent,AnnouncementBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  getRange(count: number): number[] {
    return Array(count).fill(0).map((x, i) => i);
  }

  getBannerPairs() {
    const pairWidth = 64; 
    const screenWidth = window.innerWidth;
    return Math.ceil(screenWidth / pairWidth) * 2; 
  }
}
