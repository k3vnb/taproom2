

import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "kickedness",
  pure: false
})


export class KickednessPipe implements PipeTransform {
  transform(input: Keg[]){
    var output: Keg[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].done === false) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
