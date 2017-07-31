import {Inject, Injectable} from '@angular/core';
import {ExperienceFragment} from '../core-data/experience-fragment';
import {Hero} from '../core-data/hero';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HeroFactoryService {
  constructor(@Inject('experienceFragmentFactory') private fragmentFactory) {
  }

  public build(fragmentPath: string, backgroundImagePath: string): Promise<Hero> {
    return new Promise(resolve => {
      this.fragmentFactory.build(fragmentPath).then(fragment => {
        resolve(new Hero(fragment));
      });
    });
  }
}
