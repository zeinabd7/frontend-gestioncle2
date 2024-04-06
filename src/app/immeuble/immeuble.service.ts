import { Immeuble } from './immeuble';
import { ImmeubleFilter } from './immeuble-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class ImmeubleService {
  immeubleList: Immeuble[] = [];
  api = 'http://localhost:4500/immeubles';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Immeuble> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Immeuble>(url, {params, headers});
  }

  load(filter: ImmeubleFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.immeubleList = result;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  getList(): Observable<any> {
    return this.http.get<Immeuble[]>(this.api);
  }

  find(filter: ImmeubleFilter): Observable<Immeuble[]> {
    const params = {
    };

    return this.http.get<Immeuble[]>(this.api, {params, headers});
  }

  save(entity: any): Observable<Immeuble> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Immeuble>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Immeuble>(url, entity, {headers, params});
    }
  }

  delete(entity: Immeuble): Observable<Immeuble> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Immeuble>(url, {headers, params});
    }
    return EMPTY;
  }
}

