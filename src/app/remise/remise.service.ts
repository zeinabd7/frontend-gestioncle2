import { Remise } from './remise';
import { RemiseFilter } from './remise-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');
headers.append('Content-Type','multipart/form-data');

@Injectable()
export class RemiseService {
  remiseList: Remise[] = [];
  api = 'http://localhost:4500/remises';

  constructor(private http: HttpClient) {
  }

  
  findById(entity: any): any {
    let remise={};
    console.log("find by id",entity.id)
    
    this.getList().subscribe({
      next: (data:any) => {
        remise=data.find((el:any)=>el.id===entity.id);
        return remise
      },
      error: (e) => {
        console.error(`Error! ${e.message}`)
        return  (remise);
      }
      })
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
  
  // save(formData: any): Observable<Remise> {
  //   console.log("le service princiapal");
  //   let headers = new HttpHeaders();
  //   let params = new HttpParams();    
  //   return this.http.post<Remise>(this.api, formData, { headers, params });
  // }

  save(entity:any): Observable<Remise> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}`;
      return this.http.put<Remise>(url, entity, {headers});
    } else {
      
      url = `${this.api}`;
      return this.http.post<Remise>(url, entity, {headers, params});
    }
  }

  delete(entity: Remise): Observable<Remise> {
    let url = '';
    let body={id:entity.id};
    const httpOptions = {
      headers: headers,
      body: body 
    };
    if (entity.id) {
      url = `${this.api}`;
      return this.http.delete<Remise>(url, httpOptions);
    }
    return EMPTY;
  }
 
  
}

