import React from 'react';

function EmittersWrapper(EventEmitter) {
  return props => {
    const emittersSet = ['emit1', 'emit2', 'emit3'];
    return (
      <div>
        <h2>Wrapper</h2>
        {emittersSet.map(it => (
          <EventEmitter key={it} name={it} />
        ))}
      </div>
    );
  };
}

export default EmittersWrapper;
