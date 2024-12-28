import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-slider-movies',
  templateUrl: './slider-movies.component.html',
  styleUrl: './slider-movies.component.css'
})
export class SliderMoviesComponent implements OnInit{
  constructor(
    private moviesService:MoviesService
  ){}
  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(res => {
      console.log(res);
    })
  }
}
