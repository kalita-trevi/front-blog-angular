import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-blog';

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
