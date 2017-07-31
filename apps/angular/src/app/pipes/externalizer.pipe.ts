import {Pipe, PipeTransform} from '@angular/core';
import {ConfigService} from '../services/config.service';

@Pipe({
  name: 'externalize',
  pure: false
})
export class ExternalizerPipe implements PipeTransform {
  constructor(private config: ConfigService) {
  }

  transform(data: string, type: string): any {
    if (!data) {
      return data || '';
    } else if (!this.config.isExternalize()) {
      return data || '';
    }

    type = type || 'url';

    if (type === 'html') {
      let tmp = data.replace(/src="\//m, 'src="' + this.config.getOrigin() + '/');
      tmp = tmp.replace(/href="\//m, 'href="' + this.config.getOrigin() + '/');
      return tmp;
    } else {
      return this.config.getOrigin() + data;
    }
  }
}
