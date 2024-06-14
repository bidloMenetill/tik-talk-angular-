import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  baseUrl = 'https://icherniakov.ru/yt-course/';
  getTestAccount() {
    return this.http.get<Profile[]>(`${this.baseUrl}account/test_accounts`);
  }
}
