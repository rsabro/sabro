import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://script.google.com/macros/s/AKfycby66nxvOxHBd3ah5vDf0uKLGCU9NKE_TEKVvHDOeijDVPY9fZSkMIOzfDNYKHFe-HGv7w/exec';

  constructor(private http: HttpClient) {}

  login(usuario: string, senha: string): Observable<any> {
    return this.http.post(this.apiUrl, { usuario, senha });
  }
}