import {Inject, Injectable} from '@angular/core';
import {ContentFragment} from '../core-data/content-fragment';

@Injectable()
export class ContentFragmentFactoryService {
  constructor(@Inject('content') private content) {
  }

  public build (fragmentPath: string): Promise<ContentFragment> {
    return new Promise(resolve => {
      this.content.getContentFragmentText(fragmentPath).subscribe(fragmentContent => {

        console.log(fragmentContent);

        const html = document.createElement('HTML');
        html.innerHTML = fragmentContent;

        resolve(new ContentFragment(fragmentPath, fragmentContent));
      });
    });
  }
}


