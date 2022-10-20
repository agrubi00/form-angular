import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticate: boolean = false;

  login(email: string, password: string): Observable<boolean> {
    if (email === 'ana@gmail.com' && password === 'admin' || email === 'roko@gmail.com' && password === 'admindva' ) {
      this.isAuthenticate = true;
      return of(true);
    }
    return of(false);
  }
}