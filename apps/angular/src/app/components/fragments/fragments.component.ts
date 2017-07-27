import {Component, Inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Fragment} from '../../core-data/fragment';

@Component({
  selector: 'app-fragments',
  templateUrl: './fragments.component.html',
  styleUrls: ['./fragments.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class FragmentsComponent implements OnInit {

  filter = '';
  fragments: Fragment[] = [];

  constructor(@Inject('content') private content) {
  }

  ngOnInit() {
    this.fragments = this.content.load() || [];
  }

  setFilter(value: string) {
    this.filter = value;
  }
}
