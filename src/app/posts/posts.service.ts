import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
private apiUrl = 'https://mpfe4993f115596bc4d9.free.beeceptor.com/posts';

  constructor(private httpClient:HttpClient) { }

  fetchPosts(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }

  
}
