import { Component, Input, HostBinding } from '@angular/core'

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'

@Component({
  selector: 'app-flex-container',
  template: `<ng-content></ng-content>`,
})
export class FlexComponent {
  @Input() flexDirection: FlexDirection = 'row'

  @HostBinding('style.display') get display() {
    return 'flex';
  }

  @HostBinding('style.flex-direction') get direction() {
    return this.flexDirection;
  }
}
