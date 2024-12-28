import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Movie } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  private urlApi:string = 'http://127.0.0.1:3000/'

  public getMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this.urlApi}movies`);
  }
}
