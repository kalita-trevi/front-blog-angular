import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogService, Escritora, Post, Menu } from './services/blog.service';
import { HeaderComponent } from './components/header/header.component';
import { EscritorasComponent } from './components/escritoras/escritoras.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';

import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    EscritorasComponent,
    DetalhesComponent,
    FooterComponent,
    CardComponent,
  ],
})
export class AppComponent implements OnInit {
  title = 'Monster-Blog';
  menus: Menu[] = [];
  escritoras: Escritora[] = [];
  posts: Post[] = [];
  escritoraIndex = 999;
  detalhesEscritoraIsVisible = false;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadEscritoras();
    this.loadMenus();
    this.loadPosts();
  }

  escolherEscritora(index: number): void {
    if (this.escritoraIndex === 999 || index === this.escritoraIndex) {
      this.detalhesEscritoraIsVisible = !this.detalhesEscritoraIsVisible;
    }
    this.escritoraIndex = index;
  }

  onPostCreated(newPost: Post): void {
    this.posts = [...this.posts, newPost];
  }

  private loadEscritoras(): void {
    this.blogService.getEscritoras().subscribe((data) => {
      this.escritoras = data;
    });
  }

  private loadMenus(): void {
    this.blogService.getMenus().subscribe((data) => {
      this.menus = data;
    });
  }

  private loadPosts(): void {
    this.blogService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
