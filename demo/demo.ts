import {Component} from '@angular/core';
import {HelloWorld} from './../ng2-firebase-ui';

@Component({
  selector: 'demo-app',
  directives: [HelloWorld],
  template: '<hello-world></hello-world>'
})
export class DemoApp {}
