import {Component, Input} from '@angular/core';
import {Movie} from "../model/movie.model";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-movie-item',
  template: `
    <div class="movie-item">
      <div>
        <h4>{{ movie.title }}</h4>
        <small class="subtitle">
          <span>Release date: {{ movie.release_date | date: 'yyyy-MM-dd' }}</span>
          <span>Budget: $ {{movie.budget}} million</span>
          <span>Duration: {{ movie.duration }} min</span>
        </small>
      </div>
      <button>Details</button>
    </div>
  `,
  standalone: true,
  imports: [
    DatePipe
  ],
  styleUrls: ['movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie: Movie;
}

