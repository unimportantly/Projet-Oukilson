import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountUpdateService {

  constructor(private http: HttpClient) { }

  resetPassword(form: FormGroup): Observable<any> {
    return this.http.put<any>(`${environment.URL}/path/path`, form);
  }
}
