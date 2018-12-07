import _ from "lodash";
import './style.sass';
import Icon from './build.svg';

function component() {
  let containerElement = document.createElement('div');
  containerElement.classList.add('container');

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
