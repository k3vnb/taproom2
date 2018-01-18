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
    new Keg('Barley Brown', 'Pallet Jack', 6.00, .065, 102),
    new Keg('Gigantic Brewing', 'Catch 23', 6.75, .0585, 5),
    new Keg('Baerlic', 'New Noise', 5.75, .064, 162),
  ];
  selectedKeg = null;



  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  // isDone(clickedKeg: currentKeg) {
  //   for (var i = 0; i < this.Kegs.length; i++) {
  //   console.log(this.Kegs[i].amount);
  //   }
  // }
  // soldKeg(clickedKeg){
  //   console.log("Blammo!");
  // }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

}
