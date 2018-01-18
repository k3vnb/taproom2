import { Component } from '@angular/core';
import { Keg } from './keg.model';
import { EditKegComponent } from './edit-keg.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{barName}}</h1>
    <h3>Beer Menu</h3>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  barName: string = 'The Angular Taproom';
  masterKegList: Keg[] = [
    new Keg('Barley Brown', 'Pallet Jack', 6.00, 6.50, 102),
    new Keg('Gigantic Brewing', 'Catch 23', 6.75, 5.85, 95),
    new Keg('Baerlic', 'New Noise', 5.75, 6.4, 162),
  ];
  selectedKeg = null;



  editKeg(clickedKeg) {
    console.log('edit beer');
    this.selectedKeg = clickedKeg;
  }

  // isSold(clickedKeg: currentKeg) {
  //   for (var i = 0; i < this.Kegs.length; i++) {
  //   console.log(this.Kegs[i].amount);
  //   }
  // }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

}
