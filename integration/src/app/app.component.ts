import { Component } from '@angular/core';
import { LibService } from 'quickstart-lib';

@Component({
  selector: 'integration-app',
  template: `<my-lib></my-lib>\n
             <h3>Meaning is: {{meaning}}</h3>\n`
})
export class AppComponent {
  meaning: number;
  constructor(libService: LibService) {
    this.meaning = libService.getMeaning();
  }
}
