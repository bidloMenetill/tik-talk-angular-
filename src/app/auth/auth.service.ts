import { Auth } from './interfaces/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  baseUrl = 'https://icherniakov.ru/yt-course/auth/';

  login(payload: Auth): Observable<any> {
    return this.http.post(`${this.baseUrl}token`, payload);
  }
}
