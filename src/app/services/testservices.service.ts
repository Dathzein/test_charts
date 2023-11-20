import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestservicesService {

  constructor(
    private http:HttpClient
  ) { }

  getAPIData(){
    // return this.http.get('url');
  }
}
