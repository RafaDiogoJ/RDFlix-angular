import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.themoviedb.org/3'
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmQ5NDE0ZjkzYTY4YTA4YjljNzM3MjQ0ZmNlMDEyZCIsIm5iZiI6MTc0Njc1MzAyMC4yMjcsInN1YiI6IjY4MWQ1NWZjNzNjNmVhZmQyZmIxY2NlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jzK6ERp9StSN06jKvSZ7P5VbVn6vd9SkjLT8bYvylyM'
    }
  };

  //Dados para o Banner - Mídias em desaque da semana
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?language=pt-br`, this.options);
  }

  // Filmes em destaque do Dia
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?language=pt-br`, this.options);
  }

  // Séries em destaque do dia
  trendingSerieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/tv/day?language=pt-br`, this.options);
  }

  // Filmes de Ação Populares
  popularActionMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/movie?language=pt-br&with_genres=28sort_by=popularity.desc`, this.options);
  }

  //----------Área de detalhes
  // Buscar detalhes da Midia
  mediaDetails(type: any, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${value}?language=pt-br`, this.options);
  }

  // Buscar Trailer da Mídia
  mediaTrailers(type: any, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${value}/videos?language=pt-br`, this.options);
  }

  // Buscar o Elenco da Midia
  mediaCast(type: any, value: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${value}/credits?language=pt-br`, this.options);
  }
}
