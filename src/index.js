import { cube } from './math.js';
import printMe from './print.js';
import './style.sass';
import Icon from './build.svg';

async function getCmponent() {
  var element = document.createElement('div');
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

getCmponent().then(component => {
  document.body.appendChild(component);
})
