import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  constructor(private httpClent: HttpClient) { }

  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  fetchDataFromApi(){
    return this.httpClent.get(this.baseUrl);
  }
}
