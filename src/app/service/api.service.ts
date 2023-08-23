import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  cantantes: any;
  apiUrl = 'http://ws.audioscrobbler.com/2.0/';
  private apiKey = '8f102e2d6e45e028c2ef5650ff82586e';

  public getData(): Observable<any> {
    //TOP ARTISTS
    const method = 'chart.gettopartists';
    const url = `${this.apiUrl}?method=${method}&api_key=${this.apiKey}&format=json`;
    return this.http.get<any>(url);
  }
}
