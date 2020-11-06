import { Component, VERSION } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}

// Data Down: Parent Component tương tác với Child Component
// Event Up: Child Component tương tác với Parent Component
