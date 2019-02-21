import EventEmitter from 'eventemitter3';

let eventEmitter = null;

export const getEventEmitter = () => {
  if (!eventEmitter) {
    eventEmitter = new EventEmitter();
    eventEmitter.on('hello!', args => {
      console.log({ args });
    });
  }
  return eventEmitter;
};
