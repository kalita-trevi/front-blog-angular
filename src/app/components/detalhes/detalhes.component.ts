import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.scss',
})
export class DetalhesComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() thumbnail = '';
}
