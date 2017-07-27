import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {isUndefined} from 'util';

@Injectable()
export class ConfigService {

  // 'http://localhost:4503
  private origin: string = '';
  // '/content/acs-samples/spa/angular/_jcr_content/root/responsivegrid/angular.json'
  private componentUrl = '';
  private externalize = false;

  constructor() {
    this.origin = environment['origin'] || '';
    this.componentUrl = environment['componentUrl'] || '';
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

  // environment.componentUrl
  getComponentUrl() {
    return this.addOrigin(this.componentUrl);
  }
}
