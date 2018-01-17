import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{barName}}</h1>
    <h3>Beer Menu</h3>
    <ul>
      <li *ngFor="let currentKeg of Kegs">{{currentKeg.brand}}<ul><li>{{currentKeg.title}}</li><li>$ {{currentKeg.price}}</li><li>{{currentKeg.ABV}}%</li><li (click)="isSold(currentKeg)">{{currentKeg.amount}}</li></ul><button (click)="editBeer()">Edit!</button></li>
    </ul>
  </div>
  `
})

export class AppComponent {
  barName: string = 'The Angular Taproom';
  Kegs: Keg[] = [
    new Keg('Barley Brown', 'Pallet Jack', 6.00, 6.5, 102),
    new Keg('Gigantic Brewing', 'Catch 23', 6.75, 5.8, 95),
    new Keg('Baerlic', 'New Noise', 5.75, 6.4, 162),
  ];

  editBeer() {
    console.log('edit beer');
  }

  isSold(clickedKeg: currentKeg) {
    for (var i = 0; i < this.Kegs.length; i++) {
    console.log(this.Kegs[i].amount);
    }
  }
}

export class Keg {
  public done: boolean = false;
  constructor(
    public brand: string,
    public title: string,
    public price: number,
    public ABV: number,
    public amount: number,
  ){ }
}
