import { Coproprietaire } from './coproprietaire';
import { CoproprietaireFilter } from './coproprietaire-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');


@Injectable()
export class CoproprietaireService {
  coproprietaireList: Coproprietaire[] = [];
  api = 'http://localhost:4500/coproprietaires';

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
      url = `${this.api}`;
     return this.http.put<Coproprietaire>(url, entity, {headers});

    } else {
      url = `${this.api}`;
      return this.http.post<Coproprietaire>(url, entity, {headers, params});
    }
  }

  delete(entity: Coproprietaire): Observable<Coproprietaire> {
    
    let url = '';
    let body={id:entity.id};
    const httpOptions = {
      headers: headers,
      body: body 
    };
    if (entity.id) {
      url = `${this.api}`;
      return this.http.delete<Coproprietaire>(url,httpOptions);
    }
    return EMPTY;
  }
}

