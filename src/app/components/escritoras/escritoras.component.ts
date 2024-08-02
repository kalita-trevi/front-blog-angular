import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Escritora {
  escritora: string;
  thumbnail: string;
  link: string;
  bordaCor: string;
  boxShadow: string;
}

@Component({
  selector: 'app-escritoras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escritoras.component.html',
  styleUrl: './escritoras.component.scss',
})
export class EscritorasComponent {
  @Input() escritoras: Escritora[] = [];
  @Input() thumbnail = '';
}
