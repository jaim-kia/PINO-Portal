import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface AnnouncementTag {
  type: string;
  color: string;
}

@Component({
  selector: 'app-announcement-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcement-block.component.html',
  styleUrl: './announcement-block.component.css'
})
export class AnnouncementBlockComponent {

  @Input() title: string = 'Title';
  @Input() tag: AnnouncementTag = {type: 'MEMOS', color : '#F93822' };
  @Input() date: string = '';
  @Input() isPinned: boolean = false;
  @Input() content: string = '';

  showModal = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  closeModal() {
    this.showModal = false;
  }
}
