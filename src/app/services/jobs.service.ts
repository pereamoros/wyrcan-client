import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JobsService {

  private API_URL = 'http://localhost:3000/jobs';

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

  getJob(id) :Promise<any> {
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

}
