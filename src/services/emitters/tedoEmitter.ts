import { EventEmitter } from 'fbemitter';

enum Events {
  onCreateTedo = 'onCreateTedo',
}

export class TedoEventEmitter extends EventEmitter {
  emitOnCreateTedo = (tedo: any): void => {
    this.emit(Events.onCreateTedo, tedo);
  };

  addOnCreateTedoListener = (callback: (entity: any) => void): any => {
    return this.addListener(Events.onCreateTedo, callback);
  };
}

const emitter = new TedoEventEmitter();

export default emitter;
