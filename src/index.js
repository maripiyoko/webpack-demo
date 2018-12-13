import { cube } from './math.js';
import printMe from './print.js';
import './style.sass';
import Icon from './build.svg';

function component() {
  let containerElement = document.createElement('pre');
  containerElement.classList.add('container');

  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  containerElement.appendChild(btn);

  let element = document.createElement('div');
  element.innerHTML = ['Hello', 'webpack'].join('\n\n');
  element.classList.add('hello');

  let icon = new Image();
  icon.src = Icon;
  
  containerElement.appendChild(element);
  containerElement.appendChild(icon);

  return containerElement;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}
