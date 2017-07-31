import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  public backgroundImage;
  public heroFragment;
  public fragmentsTitle;
  public experienceFragmentPaths = [];
  public contentFragmentPaths = [];

  constructor(
    @Inject('config') private config,
    @Inject('content') private content) {
  }

  ngOnInit(): void {
    this.content.get(this.config.getApiUrl()).subscribe(data => {
      console.log(data);
      this.backgroundImage = data['backgroundImage'];
      this.heroFragment = data['heroFragment'];
      this.fragmentsTitle = data['fragmentsTitle'];
      this.experienceFragmentPaths = data['experienceFragments'];
      this.contentFragmentPaths = data['contentFragments'];
    });
  }
}
