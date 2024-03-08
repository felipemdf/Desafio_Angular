import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

import { Filter } from '../../models/abitus/filter.model';
import { PageableResponse } from '../../models/abitus/http/pageableResponse.model';
import { PersonDetails } from '../../models/abitus/personDetails.model';

@Injectable({
  providedIn: 'root',
})
export default class AbitusApiService {
  private baseUrl = 'https://abitus-api.pjc.mt.gov.br/v1/pessoas';

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) {}

  public get(filters: Filter): Observable<PageableResponse> {
    let params = new HttpParams();
    if (filters.nome && filters.nome.trim().length !== 0)
      params = params.set('nome', filters.nome);

    if (filters.sexo) params = params.set('sexo', filters.sexo);
    if (filters.idadeMinima)
      params = params.set('faixaIdadeInicial', filters.idadeMinima);
    if (filters.idadeMaxima)
      params = params.set('faixaIdadeFinal', filters.idadeMaxima);

    if (filters.pagina) params = params.set('pagina', filters.pagina);

    params = params.set('porPagina', 12);
    params = params.set('status', 'DESAPARECIDO');

    return this.httpClient
      .get<PageableResponse>(`${this.baseUrl}/aberto/filtro`, {
        params: params,
        headers: this.headers,
      })
      .pipe(retry(2), catchError(this.handleError));
  }

  public getById(id: number) {
    return this.httpClient
      .get<PersonDetails>(`${this.baseUrl}/${id}`, {
        headers: this.headers,
      })
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}
