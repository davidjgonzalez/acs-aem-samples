import {Component, Inject, Input, OnChanges} from '@angular/core';
import {ContentFragment} from '../../core-data/content-fragment';

@Component({
  selector: 'app-content-fragments',
  templateUrl: './content-fragments.component.html',
  styleUrls: ['./content-fragments.component.less']
})
export class ContentFragmentsComponent implements OnChanges {
  @Input() fragmentPaths = [];

  @Input() title;

  public fragments: ContentFragment[] = [];

  constructor(@Inject('contentFragmentFactory') private fragmentFactory) {
  }

  ngOnChanges() {
    for (const fragmentPath of this.fragmentPaths) {
      this.fragmentFactory.build(fragmentPath).then(fragment => {
        console.log(fragment);
        this.fragments.push(fragment);
      });
    }
  }
}
