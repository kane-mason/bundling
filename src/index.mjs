// import '@babel/polyfill';
import component from './components/test-html/test-html.mjs';
import UNIQUE from './components/test-lodash/test-lodash.mjs';
import esxify from './components/test-esx/test-esx.mjs';

( async function () {
  document.body.appendChild(component());

  const esxstuff = new esxify(1,2,3,4);

  await esxstuff.delay(10000);

  const element = document.getElementById("unique");
  element.innerText = UNIQUE.toString();
})();