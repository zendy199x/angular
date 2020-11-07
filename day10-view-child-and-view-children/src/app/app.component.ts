import { Component, VERSION, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Cách 1:
  // @ViewChild('toggleComp') toggleComp: ToggleComponent;

  //Cách 2:
  // @ViewChild(ToggleComponent, { static: true }) toggleComp: ToggleComponent;
  @ViewChildren(ToggleComponent) toggleComp: QueryList<ToggleComponent>;;
  @ViewChild('toggleButton', { static: true }) toggleBtn: ElementRef<HTMLButtonElement>;
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef<HTMLInputElement>;

  name = 'Angular ' + VERSION.major;

  isChecked = true;
  showLast = true;

  ngOnInit() {
    console.log(this.nameInput);
    setTimeout(() => this.nameInput.nativeElement.focus(), 3000);
    // console.log('ngOnInit', this.toggleComp, this.toggleBtn)
  }

  ngAfterViewInit() {
    // console.log(this.toggleComp);
    //   apiCall.subscribe(() => {
    //     this.toggleComp.toggle();
    // })
    this.toggleComp.changes.subscribe(console.log);
  }
}
