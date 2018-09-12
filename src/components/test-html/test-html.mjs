import html from './test-html.html';

export default function component() {

  let element = document.createElement('div');

  element.innerHTML = html;

  return element;

}