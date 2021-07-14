import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { viagem } from "./formulario.model";
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class ViagensService {
  
    url = 'https://localhost:44356/WebApiRickLocalization/';
  
    
    constructor(private httpClient: HttpClient) { }
  
    
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  
    // Obtem todas as viagens
    getViagens(): Observable<viagem[]> {
      return this.httpClient.get<viagem[]>(this.url + 'getviagens')
        .pipe(
          retry(2),
          catchError(this.handleError))
    }
  
    
  
    // salva uma viagem
    saveViagem(viagem: viagem): Observable<viagem> {
      return this.httpClient.post<viagem>(this.url + 'addviagem', JSON.stringify(viagem), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
  
    
  
    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };
  
  }