import { TabGroupComponent } from './tab-group.component';
import { Component, forwardRef } from '@angular/core';

const tabBsGroupProvides = [
  {
    provide: TabGroupComponent,
    useExisting: forwardRef(() => TabBsGroupComponent),
    // useClass: SomeClass,
    // useValue: new SomeClass(),
    // useFactory: (configService) => {return configService.},
    // deps: [ConfigurationService],
    // multi:
  }
]

@Component({
  selector: `tab-bs-group`,
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item" [class.active]="idx === activeIndex" *ngFor="let tab of tabPanelList; let idx = index">
        <a class="nav-link" (click)="activeIndexChange.emit(idx)">
          {{tab.title}}
          <button class="btn btn-sm btn-danger" (click)="removeTab(tab)">x</button>
        </a>
      </li>
    </ul>

    <div class="tab-body" *ngIf="tabPanelList.length; else noTabs">
			<ng-container *ngTemplateOutlet="tabPanelList[activeIndex].panelBody">
			</ng-container>
		</div>
		<ng-template #noTabs>
			No more tab.
		</ng-template>
  `,
  // providers: [
  //   {
  //     provide: TabGroupComponent,
  //     useExisting: TabBsGroupComponent,
  //     // useClass: SomeClass,
  //     // useValue: new SomeClass(),
  //     // useFactory: (configService) => {return configService.},
  //     // deps: [ConfigurationService],
  //     // multi:
  //   }
  // ]
  providers: [
    {
      provide: TabGroupComponent,
      useExisting: TabBsGroupComponent,
      // useClass: SomeClass,
      // useValue: new SomeClass(),
      // useFactory: (configService) => {return configService.},
      // deps: [ConfigurationService],
      // multi:
    }
  ]
})

export class TabBsGroupComponent extends TabGroupComponent {

}
