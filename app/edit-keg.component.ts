import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
@Component({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf="childSelectedKeg">
      <form id="keg-form">
        <label name="brand">Brewery Name</label>
        <input [(ngModel)]="childSelectedKeg.brand" name="brand" type="text" id="brewery-name">
        <label name="title">Beer Name</label>
        <input [(ngModel)]="childSelectedKeg.title" name="title" type="text" id="beer-name">
        <label name="price">Price</label>
        <input [(ngModel)]="childSelectedKeg.price" name="price" type="text" id="pint-price">
        <label name="ABV">% ABV</label>
        <input [(ngModel)]="ABV" name="ABV" type="text" id="abv">
        <label name="amount">Pints remaining</label>
        <input [(ngModel)]="childSelectedKeg.amount" name="amount" type="text" val="124" id="pints">
        <button (click)="finishedEditing()">Done</button>
      </form>
    </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
}
