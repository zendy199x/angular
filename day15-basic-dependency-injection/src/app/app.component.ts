import { Component, VERSION, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Zendy';
  questions = {
    question1: true,
    question2: false
  }
}
