import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
@Component({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf="childSelectedKeg">

        <label name="brand">Brewery Name</label>
        <input [(ngModel)]="childSelectedKeg.brand" name="brand" type="text" id="brewery-name">
        <label name="title">Beer Name</label>
        <input [(ngModel)]="childSelectedKeg.title" name="title" type="text" id="beer-name">
        <label name="price">Price</label>
        <input [(ngModel)]="childSelectedKeg.price" name="price" type="text" id="pint-price">
        <label name="abv">ABV%</label>
        <input [(ngModel)]="childSelectedKeg.abv" name="abv" type="text" id="abv-field">
        <label name="amount">Pints remaining</label>
        <input [(ngModel)]="childSelectedKeg.amount" name="amount" type="text" value="124" id="pints">
        <button (click)="doneButtonClicked()">Done</button>

    </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
