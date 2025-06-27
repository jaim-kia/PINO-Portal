import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsService } from '../../icons.service';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span 
      [innerHTML]="svgContent" 
      class="icon" 
      [class.active]="isActive"
      [class]="baseIconType"
    ></span>
  `,
  styleUrl: './icons.component.css'
})
export class IconsComponent {
  @Input() set svgType(value: string) {
    this.baseIconType = value.replace('-active', '');
    this.updateIcon();
  }

  @Input() isActive = false;
  
  baseIconType = 'icon-home';
  svgContent: any;

  constructor(private iconsService: IconsService) {
    this.updateIcon();
  }

  ngOnChanges() {
    this.updateIcon();
  }

  private updateIcon(): void {
    const iconKey = this.isActive ? 
      `${this.baseIconType}-active` : this.baseIconType;
    this.svgContent = this.iconsService.getIcon(iconKey);
  }
}