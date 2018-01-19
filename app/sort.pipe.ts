import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "sort",
  pure: false
})

export class SortPipe implements PipeTransform {
  transform(input: Keg[], desiredSort){
    var output: Keg[] = [];
    if (desiredSort === "sortByPrice") {
      return input;
    } else {
      return input
    }



  }
}
