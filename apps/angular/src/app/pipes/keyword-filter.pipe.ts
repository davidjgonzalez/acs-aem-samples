import { Pipe, PipeTransform } from '@angular/core';
import {ExperienceFragment} from '../core-data/experience-fragment';

@Pipe({
  name: 'keywordFilter',
  pure: false
})
export class KeywordFilterPipe implements PipeTransform {
  transform(fragments: ExperienceFragment[], filter: string): any {
    if (!fragments || !filter || filter.length <= 3) {
      return fragments;
    }

    return [];
    //return fragments.filter(fragment => fragment.include(filter));
  }
}
