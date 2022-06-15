import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Moment } from 'src/interface/moment';
import { Observable } from 'rxjs';
import { IResponse } from 'src/interface/response';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3333/api/moments/';

  createMoment(formdata: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.baseUrl, formdata);
  }

  getAllMoments(): Observable<IResponse<Moment[]>> {
    return this.http.get<IResponse<Moment[]>>(this.baseUrl);
  }

  getMomentId(id: number): Observable<IResponse<Moment>> {
    const url = `${this.baseUrl}${id}`;
    return this.http.get<IResponse<Moment>>(url);
  }
}
