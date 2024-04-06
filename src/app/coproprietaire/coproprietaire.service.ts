import { Coproprietaire } from './coproprietaire';
import { CoproprietaireFilter } from './coproprietaire-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class CoproprietaireService {
  coproprietaireList: Coproprietaire[] = [];
  api = 'http://localhost:4500/coproprietaires';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Coproprietaire> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Coproprietaire>(url, {params, headers});
  }

  load(filter: CoproprietaireFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.coproprietaireList = result;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  getList(): Observable<any> {
    return this.http.get<Coproprietaire[]>(this.api);
  }

  find(filter: CoproprietaireFilter): Observable<Coproprietaire[]> {
    const params = {
    };

    return this.http.get<Coproprietaire[]>(this.api, {params, headers});
  }

  save(entity: any): Observable<Coproprietaire> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Coproprietaire>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Coproprietaire>(url, entity, {headers, params});
    }
  }

  delete(entity: Coproprietaire): Observable<Coproprietaire> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Coproprietaire>(url, {headers, params});
    }
    return EMPTY;
  }
}

