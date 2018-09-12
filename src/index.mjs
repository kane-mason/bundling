// import '@babel/polyfill';
import component from './components/test-html/test-html.mjs';
import UNIQUE from './components/test-lodash/test-lodash.mjs';
import Esxify from './components/test-esx/test-esx.mjs';
import TypeScriptify from './components/test-typescript/test-typescript.ts';

(
  async function () {
    document.body.appendChild(component());

    const esx = new Esxify(1,2,3,4);

    const typescript = new TypeScriptify('Typescript!');

    await esx.delay(5000);

    const element = document.getElementById("unique");
    element.innerText = `${UNIQUE.toString()}___${typescript.greet()}`;
  }

)();