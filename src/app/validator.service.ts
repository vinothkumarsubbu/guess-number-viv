import { Injectable } from "@angular/core";
import * as _ from "lodash";
@Injectable({
  providedIn: "root"
})
export class ValidatorService {
  constructor() {}

  generateRandomNumber(size) {
    var length = size;
    var randomNumberArray = [];
    for (var i = 1; i <= length; ) {
      var randomNumber = _.random(0, 9);
      if (!_.includes(randomNumberArray, randomNumber)) {
        randomNumberArray.push(randomNumber);
        i++;
      }
    }
    console.log(randomNumberArray);
  }

  compareUserInput(randomNumber, userInput) {
    var ran = randomNumber;//_.split("1234", "");
    var input = _.split(userInput, "");
    var vItems = [];
    var intersection = [];
    var misplacedCommonElement = [];

    var v = 0, k=0, i=0, j=0;
    var contains = false;
    if (input.length != ran.length) {
      if (input.length > ran.length) {
        for (i = ran.length; i <= input.length; i++) {
          ran.push(-1);
        }
      }

      if (input.length < ran.length) {
        for (i = input.length; i <= ran.length; i++) {
          input.push('-9');
        }
      }
    }

    for (i = 0; i < ran.length; i++) {
      if (ran[i] == input[i]) {
        v++;
        vItems.push(input[i]);
      }
    }

    for (i = 0; i < ran.length; i++) {
      for ( j = 0; j < input.length; j++) {
        if (ran[i] == input[j]) {
          intersection.push(ran[i]);
          input[j] = i + "" + j + "" + 99;
        }
      }
    }

    for ( i = 0; i < intersection.length; i++) {
      for ( j = 0; j < vItems.length; j++) {
        if (intersection[i] == vItems[j]) {
          contains = true;
          break;
        }
      }
      if (!contains) {
        misplacedCommonElement.push(intersection[i]);
        intersection[i] = -9;
      } else {
        contains = false;
      }
    }

    k = _.uniq(misplacedCommonElement).length;

    return v+"V"+k+"K";
  }
}
