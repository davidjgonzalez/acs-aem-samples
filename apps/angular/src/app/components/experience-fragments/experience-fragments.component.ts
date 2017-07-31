import {Component, Inject, Input, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';
import {ExperienceFragment} from '../../core-data/experience-fragment';

@Component({
  selector: 'app-experience-fragments',
  templateUrl: './experience-fragments.component.html',
  styleUrls: ['./experience-fragments.component.less']
})
export class ExperienceFragmentsComponent implements OnChanges {

  @Input() fragmentPaths = [];

  @Input() title;

  public fragments: ExperienceFragment[] = [];

  constructor(@Inject('experienceFragmentFactory') private fragmentFactory) {
  }

  ngOnChanges() {
    for (const fragmentPath of this.fragmentPaths) {
      this.fragmentFactory.build(fragmentPath).then(fragment => {
        this.fragments.push(fragment);
      });
    }
  }
}
