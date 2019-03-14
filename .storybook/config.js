import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/stories/event-emitter-stories');
}

configure(loadStories, module);
