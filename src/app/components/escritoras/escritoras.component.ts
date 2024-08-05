import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Escritora {
  escritora: string;
  thumbnail: string;
  link: string;
  bordaCor: string;
  boxShadow: string;
  detailThumbnail: string;
  detailDescription: string;
}

@Component({
  selector: 'app-escritoras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escritoras.component.html',
  styleUrl: './escritoras.component.scss',
})
export class EscritorasComponent {
  @Output() escritoraSelecionada = new EventEmitter<number>();

  escolherEscritora(index: number) {
    this.escritoraSelecionada.emit(index);
  }

  @Input() escritoras: Escritora[] = [];
  @Input() thumbnail = '';
}
