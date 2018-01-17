import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li *ngFor="let currentKeg of childKegList">{{currentKeg.brand}}<ul><li>{{currentKeg.title}}</li><li>$ {{currentKeg.price}}</li><li>{{currentKeg.abv}}</li><li (click)="isSold(currentKeg)">{{currentKeg.amount}}</li></ul><button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

}
