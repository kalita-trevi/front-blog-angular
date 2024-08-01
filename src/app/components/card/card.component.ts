import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title = '';
  @Input() data = '';
  @Input() thumbnail = '';
  @Input() author = '';
}
