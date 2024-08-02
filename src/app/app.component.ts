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
  title = 'Monster-Blog . . .';

  escritoras: Escritora[] = [
    {
      escritora: 'Escritoras 1',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPybiWfHFMaxrGJcItc4wuBJo3yRUKcR7F5Q&s',
      link: 'escritoras-1',
      bordaCor: 'rgb(184, 127, 204)',
      boxShadow: 'rgb(184, 127, 204)',
    },
    {
      escritora: 'Escritoras 2',
      thumbnail:
        'https://pm1.aminoapps.com/6474/0277e13ee21dfa650e2f9343d14155e7d75400b5_00.jpg',
      link: 'escritoras-2',
      bordaCor: 'rgb(6, 101, 245',
      boxShadow: 'rgb(6, 101, 245)',
    },
    {
      escritora: 'Escritoras 3',
      thumbnail:
        'https://i.pinimg.com/474x/b1/98/49/b19849f8fb811986bcbdd0bf7bae6e51.jpg',
      link: 'escritoras-3',
      bordaCor: 'rgb(121, 6, 245)',
      boxShadow: ' rgb(121, 6, 245)',
    },
    {
      escritora: 'Escritoras 4',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-QNWmldNpXpgXTNiQdpUJzYeU_koil367Q&s',
      link: 'escritoras-4',
      bordaCor: 'rgb(245, 225, 6)',
      boxShadow: 'rgb(245, 225, 6)',
    },
    {
      escritora: 'Escritoras 5',
      thumbnail:
        'https://images-americanas.b2w.io/produtos/2811124816/imagens/livro-lagoona-blue-a-monstrinha-do-mar-monster-high/2811124816_1_large.jpg',
      link: 'escritoras-5',
      bordaCor: 'rgb(6, 245, 245)',
      boxShadow: 'rgb(6, 245, 245)',
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
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pjmheY6g2DWSj4_Na8Znh9hBajIumynaHg&s',
      data: '19/09/2022',
      author: 'Kil 1',
    },
    {
      title: 'Post 2',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpVRkgCaNiWN-nfggm1QVP9bGCJmNlaP2yg&s',
      data: '19/09/2022',
      author: 'Kil',
    },
  ];
}
