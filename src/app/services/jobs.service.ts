import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JobsService {

  private API_URL = 'http://localhost:3000/jobs';

  constructor(private httpClient: HttpClient) { }


  create(user: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/create`, user, options)
      .toPromise()
  }

}
