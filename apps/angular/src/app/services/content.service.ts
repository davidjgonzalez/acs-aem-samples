import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Fragment} from '../core-data/fragment';
import {isArray} from 'util';


@Injectable()
export class ContentService {
  private fragments: Fragment[] = [];

  constructor(private http: HttpClient,
              @Inject('config') private config) {
  }

  private getFragmentUrl(fragmentPath: string) {
    return this.config.addOrigin(fragmentPath + '/_jcr_content/root.html');
  }

  // Ideally this is replaced w/ a rewriter
  private externalizeHtml(html: string) {
    if (this.config.isExternalize()) {
      return html.replace(/src="\//m,
        'src="' + this.config.getOrigin() + '/');
    } else {
      return html;
    }
  }

  load() {
    this.http.get(this.config.getComponentUrl()).subscribe(data => {
      // Read the result field from the JSON response.
      let fragmentPaths = [];

      // Depending on the number of values specified, the fragments property can be an array or a string
      if (data.hasOwnProperty('fragments')) {
        if (isArray(data['fragments'])) {
          fragmentPaths = data['fragments'];
        } else {
          fragmentPaths.push(data['fragments']);
        }
      }

      for (const fragmentPath of fragmentPaths) {
        const fragmentUrl = this.getFragmentUrl(fragmentPath);
        this.http.get(fragmentUrl, { responseType: 'text' }).subscribe(html => {
          this.fragments.push(new Fragment(fragmentUrl, this.externalizeHtml(html)));
        });
      }
    });

    return this.fragments;
  }
}
