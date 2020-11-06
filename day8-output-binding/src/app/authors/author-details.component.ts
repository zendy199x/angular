import { Component, Input, Output, EventEmitter } from "@angular/core"
import { Author } from "../authors.model"

@Component({
  selector: "app-author-details",
  template: `
    <div *ngIf="author">
      {{author.firstName}} {{author.lastName}}
      <button style="margin-left: 1rem" (click)="select.emit(author)">Select</button>
      <button style="margin-left: 1rem" (click)="handleDelete()">Delete</button>
    </div>
  `
})

export class AuthorDetailsComponent {
  @Input() author: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();

  // Cách 2:
  handleDelete() {
    this.delete.emit(this.author.id)
  }
}
