import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  Escritora,
  EscritorasComponent,
} from './components/escritoras/escritoras.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

interface Post {
  title: string;
  thumbnail: string;
  data: string;
  author: string;
}
interface Menu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    EscritorasComponent,
    CardComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-blog';

  escritoras: Escritora[] = [
    {
      escritora: 'Escritoras 1',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPybiWfHFMaxrGJcItc4wuBJo3yRUKcR7F5Q&s',
      link: 'escritoras-1',
      cor: 'pink',
    },
    {
      escritora: 'Escritoras 2',
      thumbnail:
        'https://pm1.aminoapps.com/6474/0277e13ee21dfa650e2f9343d14155e7d75400b5_00.jpg',
      link: 'escritoras-2',
      cor: 'blue',
    },
    {
      escritora: 'Escritoras 3',
      thumbnail:
        'https://i.pinimg.com/474x/b1/98/49/b19849f8fb811986bcbdd0bf7bae6e51.jpg',
      link: 'escritoras-3',
      cor: 'purple',
    },
    {
      escritora: 'Escritoras 4',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-QNWmldNpXpgXTNiQdpUJzYeU_koil367Q&s',
      link: 'escritoras-4',
      cor: 'yellow',
    },
    {
      escritora: 'Escritoras 5',
      thumbnail:
        'https://images-americanas.b2w.io/produtos/2811124816/imagens/livro-lagoona-blue-a-monstrinha-do-mar-monster-high/2811124816_1_large.jpg',
      link: 'escritoras-5',
      cor: '#B4D6CD',
    },
  ];

  menus: Menu[] = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Sobre',
      link: '/sobre',
    },
  ];

  posts: Post[] = [
    {
      title: 'Post 1',
      thumbnail: 'https://via.placeholder.com/300x150',
      data: '19/09/2022',
      author: 'Author 1',
    },
    {
      title: 'Post 2',
      thumbnail: 'https://via.placeholder.com/300x200',
      data: '19/09/2022',
      author: 'Author 2',
    },
    {
      title: 'Post 3',
      thumbnail: 'https://via.placeholder.com/300x100',
      data: '19/09/2022',
      author: 'Author 3',
    },
    {
      title: 'Post 4',
      thumbnail: 'https://via.placeholder.com/300x250',
      data: '19/09/2022',
      author: 'Author 4',
    },
    {
      title: 'Post 5',
      thumbnail: 'https://via.placeholder.com/300x300',
      data: '19/09/2022',
      author: 'Author 5',
    },
    {
      title: 'Post 6',
      thumbnail: 'https://via.placeholder.com/300x150',
      data: '19/09/2022',
      author: 'Author 6',
    },
  ];
}
