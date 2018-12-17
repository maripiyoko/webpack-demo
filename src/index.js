import { cube } from './math.js';
import printMe from './print.js';
import './style.sass';
import Icon from './build.svg';

function getCmponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }).catch(error => 'An error occured while loading the component');
}

getCmponent().then(component => {
  document.body.appendChild(component);
})
