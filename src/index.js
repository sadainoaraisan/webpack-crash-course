import _ from 'lodash';
// import {NAME, Nijou} from './utilities'
// import {NAME as NAME_OF_HUM} from './utilities'
// import * as utilities from './utilities'
// import Tiger from './utilities'

import style from './style.css';
// import './style.css'
 //styleはこれでもOk省略できる　あれ？できない？やっぱstyleいる
console.log(style);

// console.log(Tiger.say());
// console.log(NAME_OF_HUM)
// console.log(utilities.Nijou(3));
// console.log(utilities.NAME);

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei');