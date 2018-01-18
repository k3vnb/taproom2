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
      for (var i =0; i < input.length; i++) {
        input[i].price.sort(function(a,b) {
        return a - b });
        output.push(input[i]);
        console.log(output);
      } else if (desiredSort === "sortByABV") {
        for (var i = 0; i < input.length; i++) {
          input[i].abv.sort(function(a,b) {
          return a - b });
          output.push(input[i]);
          console.log(output);
        }
      }
    }
  }
}
