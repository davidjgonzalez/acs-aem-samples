import { Pipe, PipeTransform } from '@angular/core';
import {Fragment} from '../core-data/fragment';

@Pipe({
  name: 'keywordFilter',
  pure: false
})
export class KeywordFilterPipe implements PipeTransform {
  transform(fragments: Fragment[], filter: string): any {
    if (!fragments || !filter || filter.length <= 3) {
      return fragments;
    }

    return fragments.filter(fragment => fragment.include(filter));
  }
}
