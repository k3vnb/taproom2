import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <label name="brand">Brewery Name</label>
    <input #newBrand>
    <label name="title">Beer Name</label>
    <input #newTitle>
    <label name="price">Price</label>
    <input #newPrice>
    <label name="abv">ABV%</label>
    <input #newAbv>
    <label name="amount">Pints remaining</label>
    <input #newAmount>
    <button (click)="submitForm(newBrand.value, newTitle.value, newPrice.value, newAbv.value, newAmount.value); newBrand.value=''; newTitle.value=''; newPrice.value=''; newAbv.value=''; newAmount.value='';">Add</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(brand: string, title: string, price: number, abv: number, amount:number) {
    var newKegToAdd: Keg = new Keg(brand,title,price,abv,amount);
    this.newKegSender.emit(newKegToAdd);

  }
}
