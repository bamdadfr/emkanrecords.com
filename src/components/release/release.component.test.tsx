import {render as defaultRender} from '@testing-library/react';
import React from 'react';
import {Release} from 'src/app/data/releases';

import EMK000 from '../../../public/releases/EMK000.jpg';
import {ReleaseComponent} from './release.component';

const render = () => {
  const release: Release = {
    id: 0,
    artist: 'artist',
    name: 'name',
    image: EMK000,
    date: 123,
    retailers: {
      youtube: 'youtube',
      itunes: 'itunes',
      spotify: 'spotify',
    },
  };

  const {container} = defaultRender(
    <ReleaseComponent release={release} />,
  );

  return {
    container,
  };
};

describe('ReleaseComponent', () => {
  describe('container', () => {
    it('should be defined and visible', () => {
      const {container} = render();
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
    });

    it('should not be empty', () => {
      const {container} = render();
      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
