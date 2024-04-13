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

  
  findById(entity: any): any {
    let coproprietaire={};
    console.log("find by id",entity.id)
    
    this.getList().subscribe({
      next: (data:any) => {
        coproprietaire=data.find((el:any)=>el.id===entity.id);
        return coproprietaire
      },
      error: (e) => {
        console.error(`Error! ${e.message}`)
        return  (coproprietaire);
      }
      })
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
      url = `${this.api}`;
      return this.http.put<Lot>(url, entity, {headers});
    } else {
      url = `${this.api}`;
      return this.http.post<Lot>(url, entity, {headers, params});
    }
  }

  delete(entity: Lot): Observable<Lot> {
    let url = '';
    let body={id:entity.id};
    const httpOptions = {
      headers: headers,
      body: body 
    };

    if (entity.id) {
      url = `${this.api}`;
      return this.http.delete<Lot>(url, httpOptions);
    }
    return EMPTY;
  }

  
}

