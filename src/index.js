import _ from "lodash";
import printMe from './print.js';
import './style.sass';
import Icon from './build.svg';

function component() {
  let containerElement = document.createElement('div');
  containerElement.classList.add('container');

  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  containerElement.appendChild(btn);

  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  let icon = new Image();
  icon.src = Icon;
  
  containerElement.appendChild(element);
  containerElement.appendChild(icon);

  return containerElement;
}

document.body.appendChild(component());
