import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AbstractId} from '../model/abstract-id';

export abstract class AbstractService<ENTITY extends AbstractId, ID> {

  protected constructor(
    protected readonly httpClient: HttpClient) {
  }

  protected abstract getUrl(): string;

  public save(entity: ENTITY): Observable<ENTITY> {
    return this.httpClient.post<ENTITY>(this.getUrl(), entity, {});
  }

  public saveWithResponse(entity: ENTITY): Observable<HttpResponse<ENTITY>> {
    return this.httpClient.post<ENTITY>(this.getUrl(), entity, {
      observe: 'response'
    });
  }

  public login(entity: any): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(`${this.getUrl()}/login`, entity, {
      observe: 'response'
    });
  }

  public saveAll(entity: ENTITY[]): Observable<ENTITY[]> {
    return this.httpClient.post<ENTITY[]>(this.getUrl(), entity, {});
  }


  public update(entity: ENTITY, id: ID): Observable<ENTITY> {
    return this.httpClient.put<ENTITY>(`${this.getUrl()}/${id}`, entity, {});
  }

  public updateAll(entity: ENTITY[]): Observable<ENTITY[]> {
    return this.httpClient.put<ENTITY[]>(this.getUrl(), entity, {});
  }

  public findById(id: ID): Observable<ENTITY> {
    return this.httpClient.get<ENTITY>(`${this.getUrl()}/${id}`, {});
  }

  public findAll(filters: any = {}): Observable<HttpResponse<ENTITY[]>> {
    const params = this.getAllAsHttpParams(filters);
    return this.httpClient.get<ENTITY[]>(this.getUrl(), {
      params,
      observe: 'response'
    });
  }

  public deleteById(id: ID): Observable<void> {
    return this.httpClient.delete<void>(`${this.getUrl()}/${id}`, {});
  }

  public deleteAllByIds(ids: ID[]): Observable<void> {
    return this.httpClient.delete<void>(`${this.getUrl()}/${ids}`, {});
  }

  public getAllAsHttpParams(parametros: any): HttpParams {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(parametros)) {
      if (value || value === 0) {
        params = params.set(key, value.toString());
      }
    }
    return params;
  }

}

