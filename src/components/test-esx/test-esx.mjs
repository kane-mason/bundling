export default class esxify {

  constructor(...params){
    this._param1 = params[0];
    this._param2 = params[1];
  }

  async delay(time){
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time)
    })
  }
}