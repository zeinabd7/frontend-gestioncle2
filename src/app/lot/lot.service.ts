import { Lot } from './lot';
import { LotFilter } from './lot-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class LotService {
  lotList: Lot[] = [];
  api = 'http://localhost:4500/lots';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Lot> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Lot>(url, {params, headers});
  }

  load(filter: LotFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.lotList = result;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  getList(): Observable<any> {
    return this.http.get<Lot[]>(this.api);
  }

  find(filter: LotFilter): Observable<Lot[]> {
    const params = {
    };

    return this.http.get<Lot[]>(this.api, {params, headers});
  }

  save(entity: any): Observable<Lot> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Lot>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Lot>(url, entity, {headers, params});
    }
  }

  delete(entity: Lot): Observable<Lot> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Lot>(url, {headers, params});
    }
    return EMPTY;
  }
}

