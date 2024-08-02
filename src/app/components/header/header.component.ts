import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Menu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title = '';

  @Input() menus: Menu[] = [];
}
