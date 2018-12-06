import _ from "lodash";
import './style.sass';

function component() {
  let containerElement = document.createElement('div');
  containerElement.classList.add('container');

  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  containerElement.appendChild(element);
  return containerElement;
}

document.body.appendChild(component());
