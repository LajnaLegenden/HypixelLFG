// tslint:disable: quotemark
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import axios from 'axios';

const call = axios.create({
  baseURL: "http://localhost:1323/api/v1/",
  withCredentials: true
});

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
    console.log('apiService: ctor()');
  }

  // Private methods
  private async getApi(url) {
    try {
      return await call.get(url);
    } catch (e) {
      console.log(e);
    }
  }


  // Public methods
  
  public async getLoggedInUser() {
    const res = await this.getApi("/me");
    return _.get(await res, "data", undefined);
  }
}
