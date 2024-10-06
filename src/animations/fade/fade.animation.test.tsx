import {render as defaultRender, screen} from '@testing-library/react';
import React from 'react';

import {FadeAnimation} from './fade.animation';

const render = () => {
  const string = 'this is the content of my test';

  const {container} = defaultRender(
    <FadeAnimation>
      <span aria-label="children">{string}</span>
    </FadeAnimation>,
  );

  return {
    container,
    string,
    children: screen.getByLabelText('children'),
  };
};

describe('FadeAnimation', () => {
  describe('container', () => {
    it('should be in the document', () => {
      const {container} = render();
      expect(container).toBeInTheDocument();
    });

    it('should be visible', () => {
      const {container} = render();
      expect(container).toBeVisible();
    });

    it('should not be empty', () => {
      const {container} = render();
      expect(container).not.toBeEmptyDOMElement();
    });
  });

  describe('children', () => {
    it('should display the string content', () => {
      const {children, string} = render();
      expect(children).toHaveTextContent(string);
    });
  });
});
