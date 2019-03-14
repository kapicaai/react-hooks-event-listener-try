import React from 'react';
import renderer from 'react-test-renderer';

import EventEmitter from './index';

test('Event changes text', () => {
  const component = renderer.create(<EventEmitter name="some name" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
