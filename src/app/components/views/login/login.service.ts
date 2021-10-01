import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = environment.baseURL + "/users";
  jsonDataToResource: any;
  constructor(private http: HttpClient) {}

    verifyLogin(usercode: String, password: String): Observable<User> {
      let body: User = {id : usercode, password : password};
      
      return this.http.post<User>(this.baseUrl, body);

  }
}
