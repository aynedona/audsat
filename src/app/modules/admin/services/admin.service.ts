import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users';
import { Posts } from '../interfaces/posts';
import { Comments } from '../interfaces/comments';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getListUsers(query: string = ""): Observable<any> {
    return this.httpClient.get<Users[]>(`${environment.baseUrl}/users${query}`);
  }

  public getPostUser(userId: number): Observable<any> {
    return this.httpClient.get<Posts[]>(`${environment.baseUrl}/users/${userId}/posts`)
  }

  public getCommentPost(postId: number): Observable<any> {
    return this.httpClient.get<Comments[]>(`${environment.baseUrl}/posts/${postId}/comments`)
  }

  public deletePost(postId: number): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}/posts/${postId}`);
  }
}
