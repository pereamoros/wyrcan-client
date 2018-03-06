import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class JobsService {

  private API_URL = environment.apiUrl + '/jobs';

  constructor(private httpClient: HttpClient) { }

  getList(): Promise<any>{
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/jobs`, options)
      .toPromise()
  }

  getMyList(): Promise<any>{
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/my-jobs`, options)
      .toPromise()
  }

  getJob(id: any) :Promise<any> {
    return this.httpClient.get(`${this.API_URL}/${id}`)
      .toPromise()
  }

  create(job: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/create`, job, options)
      .toPromise()
  }

  apply(id: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/${id}/apply`, {}, options)
      .toPromise()
  }

  archive(id: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/${id}/archive`, {}, options)
      .toPromise()
  }

}
