import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContentService {
  constructor(private http: HttpClient,
              @Inject('config') private config) {
  }

  get(path: string) {
    return this.http.get(this.config.addOrigin(path));
  }

  getJSON(path: string) {
    return this.http.get(this.config.addOrigin(path + '.json'));
  }

  getExperienceFragmentHTML(path: string) {
    const url = this.config.addOrigin(path + '.html');
    return this.http.get(url, { responseType: 'text' });
  }

  getFragmentJSON(path: string) {
    const url =  this.config.addOrigin(path + '/../_jcr_content.json');
    return this.http.get(url);
  }

  getContentFragmentText(path: string) {
    const url = this.config.addOrigin(path + '/_jcr_content/renditions/original');
    return this.http.get(url, { responseType: 'text' });

  }

}
