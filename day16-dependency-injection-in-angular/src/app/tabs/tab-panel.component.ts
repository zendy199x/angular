import { TabGroupComponent } from './tab-group.component';
import { Component, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: `tab-panel`,
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [``]
})

export class TabPanelComponent {
  @Input() title: string;
  @ViewChild(TemplateRef, { static: true }) panelBody: TemplateRef<unknown>;

  constructor(private tabGroup: TabGroupComponent) { }

  ngOnInit(): void {
    this.tabGroup.addTab(this);
  }

  ngOnDestroy(): void {
    this.tabGroup.removeTab(this);
  }
}
