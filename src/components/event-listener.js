import React from 'react';
import EmittersWrapper from './emitters-wrapper';
import MyEventEmitter from './event-emitter';

const MyEventListener = () => {
  const WrappedEventEmitter = EmittersWrapper(MyEventEmitter);

  return (
    <div>
      <h1>Listener</h1>
      <WrappedEventEmitter />
    </div>
  );
};

export default MyEventListener;
