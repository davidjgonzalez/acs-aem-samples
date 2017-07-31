import {Inject, Injectable} from '@angular/core';
import {ExperienceFragment} from '../core-data/experience-fragment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ExperienceFragmentFactoryService {
  constructor(@Inject('content') private content) {
  }

  public build (fragmentPath: string): Promise<ExperienceFragment> {
    return new Promise(resolve => {
      this.content.getExperienceFragmentHTML(fragmentPath).subscribe(fragmentHTML => {

        /**
         * const html = document.createElement('HTML');
         * html.innerHTML = fragmentHTML;
         * html.getElementsByTagName('body')[0].innerHTML || ''
         */

        resolve(new ExperienceFragment(fragmentPath, fragmentHTML));
      });
    });
  }
}


