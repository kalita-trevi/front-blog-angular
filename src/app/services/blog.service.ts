import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Escritora {
  id: number;
  escritora: string;
  thumbnail: string;
  link: string;
  bordaCor: string;
  boxShadow: string;
  detailThumbnail: string;
  detailDescription: string;
}

export interface Post {
  id: number;
  title: string;
  thumbnail: string;
  data: string;
  author: string;
}

export interface Menu {
  title: string;
  link: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getEscritoras(): Observable<Escritora[]> {
    return this.http.get<Escritora[]>(`${this.baseUrl}/escritoras`);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}/posts`, post);
  }

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.baseUrl}/menus`);
  }
}
