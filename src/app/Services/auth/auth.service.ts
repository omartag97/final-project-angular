import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:8000/api/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      `${AUTH_API}/login`,
    {
      username,
      password
    },
      httpOptions
    );
  }

  register(username: string, email: string, password: string, confirm_password: string, formData: FormData ): Observable<any> {
    return this.http.post(
      `${AUTH_API}/register`,
    {
      username,
      email,
      password,
      confirm_password,
      image:formData
    },
      httpOptions
    );
  }
}
