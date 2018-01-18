import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allKegs">All Kegs</option>
      <option value="completedKegs">Kicked Kegs</option>
      <option value="incompleteKegs" selected="selected">not Kicked Kegs</option>
    </select>

    <ul>
      <li (click)="isDone(currentKeg)" *ngFor="let currentKeg of childKegList | kickedness:filterByKickedness">{{currentKeg.brand}}
          <input *ngIf="currentKeg.done === true" type="checkbox" checked (click)="toggleDone(currentKeg, false)"/>
          <input *ngIf="currentKeg.done === false" type="checkbox" (click)="toggleDone(currentKeg, true)"/><ul>
        <li>{{currentKeg.title}}</li><li>{{currentKeg.price | currency: 'USD': 'symbol'}}</li><li>{{currentKeg.abv | percent}}</li><li (click)="isSold(currentKeg)">{{currentKeg.amount}}</li></ul>
        <button class="edit-btn" (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button></li>
    </ul>
  `
})



export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  filterByKickedness: string = "incompleteKegs";

  onChange(optionFromMenu) {
    this.filterByKickedness = optionFromMenu;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  toggleDone(clickedKeg: Keg, setKickedness: boolean) {
     clickedKeg.done = setKickedness;
   }

}
