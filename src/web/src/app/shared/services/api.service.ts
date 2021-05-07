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
  private async getApi(url, options = undefined) {
    try {
      return await call.get(url, options);
    } catch (e) {
      console.log(e);
    }
  }

  private async postApi(url, data) {
    try {
      return await call.post(url, data, { headers: { "Content-Type": "application/json" } });
    } catch (e) {
      console.log(e);
    }
  }


  // Public methods

  public async getLoggedInUser() {
    const res = await this.getApi("/me");
    return _.get(await res, "data", undefined);
  }

  public async createPost(data) {
    try {
      return await this.postApi('/createPost', data);
    } catch (e) {
      console.log(e);
    }
  }

  public async getPosts(options) {
    const res = await this.getApi("/posts/getPosts", { params: options });
    return _.get(await res, "data", undefined);
  }
}
