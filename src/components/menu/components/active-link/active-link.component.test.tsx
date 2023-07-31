import {render} from '@testing-library/react';

import {ActiveLinkComponent} from './active-link.component';

describe('ActiveLinkComponent', () => {
  describe('container', () => {
    it('should be in the document', () => {
      const {container} = render(
        <ActiveLinkComponent
          href="http://localhost/mylink"
          text="my text"
        />,
      );
      expect(container).toBeInTheDocument();
    });

    it('should be visible', () => {
      const {container} = render(
        <ActiveLinkComponent
          href="http://localhost/mylink"
          text="my text"
        />,
      );
      expect(container).toBeVisible();
    });
  });
});
