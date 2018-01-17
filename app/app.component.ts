import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{barName}}</h1>
    <h3>Beer Menu</h3>
    <ul>
      <li>{{firstKeg.description}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  barName: string = 'The Angular Taproom';
  firstKeg: Keg = new Keg('Barley Brown Pallet Jack');
}

export class Keg {
  public done: boolean = false;
  constructor(
    public title: string,
    public brand: string,
    public price: number,
    public ABV: number,
    public amount: number, 
  ){ }
}
