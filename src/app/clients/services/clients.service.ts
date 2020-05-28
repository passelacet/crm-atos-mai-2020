import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe( // this.urlApi + 'orders'
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj);
        });
      })
    );
  }

  // get collection
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }

  public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = new Client({...item});
    obj.state = state;
    return this.updateItem(obj);
  }

  //update item in collection
  public updateItem(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}clients/${item.id}`, item);
  }
}
