import {Component, Inject, Input, OnChanges} from '@angular/core';
import {Hero} from '../../core-data/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.less'],
})
export class HeroComponent implements OnChanges {
  @Input() heroFragment;

  hero: Hero;

  constructor(
    @Inject('config') private config,
    @Inject('heroFactory') private heroFactory) {
  }

  ngOnChanges() {
    this.heroFactory.build(this.heroFragment).then( hero => {
      this.hero = hero;
    });
  }
}
