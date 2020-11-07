import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
    <div
    class="toggle-wrapper"
    [class.checked]="checked"
    tabIndex="0"
    (click)="toggle()"
  >
    <div class="toggle"></div>
  </div>
  `,
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  @Input() checked: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggle() {
    this.checkedChange.emit(!this.checked);
  }
}
