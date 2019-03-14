import React, { useEffect } from 'react';
import { getEventEmitter } from '../../event-emitter-singletone';

const EventEmitterComponent = props => {
  useEffect(() => {
    const emitter = getEventEmitter();
    emitter.emit('hello!', props.name);
  });
  return (
    <div>
      <h3>Event emitter {props.name}</h3>
    </div>
  );
};

export default EventEmitterComponent;
