import { Remise } from './remise';
import { RemiseFilter } from './remise-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class RemiseService {
  remiseList: Remise[] = [];
  api = 'http://localhost:4500/remises';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Remise> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Remise>(url, {params, headers});
  }

  getList(): Observable<any> {
    return this.http.get<Remise[]>(this.api);
  }

  load(filter: RemiseFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.remiseList = result;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  find(filter: RemiseFilter): Observable<Remise[]> {
    const params = {
      'id_lot': filter.id_lot,
    };

    return this.http.get<Remise[]>(this.api, {params, headers});
  }

  save(entity:any): Observable<Remise> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Remise>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Remise>(url, entity, {headers, params});
    }
  }

  delete(entity: Remise): Observable<Remise> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Remise>(url, {headers, params});
    }
    return EMPTY;
  }
}

