import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import EventEmitter from '../components/event-emitter';

storiesOf('Event Emitter', module)
  .addDecorator(storyFn => <div className="panel">{storyFn()}</div>)
  .add('with props', () => <EventEmitter name="Mary" />)
  .add('without props', () => <EventEmitter />)
  .add();
