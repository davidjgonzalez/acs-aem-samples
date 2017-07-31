import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {isUndefined} from 'util';

@Injectable()
export class ConfigService {

  // 'http://localhost:4503
  private origin: string = '';
  // '/spa/angular.json'
  private apiUrl = '';
  private externalize = false;

  constructor() {
    this.origin = environment['origin'] || '';
    this.apiUrl = environment['apiUrl'] || '';
    this.externalize = !isUndefined(this.origin) && this.origin !== '';
  }

  isExternalize() {
    return this.externalize;
  }

  // environment.origin
  getOrigin() {
    return this.origin || '';
  }

  addOrigin(absolutePath: string) {
    return this.getOrigin() + absolutePath;
  }

  getApiUrl() {
    return this.apiUrl;
  }
}
