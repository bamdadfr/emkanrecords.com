import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { FooterComponent } from './footer.component';

afterEach (cleanup);

describe ('FooterComponent', () => {
  describe ('container', () => {
    it ('should be in the document', () => {
      const { container } = render (<FooterComponent />);
      expect (container).toBeInTheDocument ();
    });

    it ('should be visible', () => {
      const { container } = render (<FooterComponent />);
      expect (container).toBeVisible ();
    });
  });

  describe ('footer', () => {
    it ('should display Bamdad Sabbagh', () => {
      render (<FooterComponent />);
      const footer = screen.getByRole ('link');
      expect (footer).toHaveTextContent ('Bamdad Sabbagh');
    });
  });
});
