import React from 'react';

import {ActiveLinkComponent} from './components/active-link/active-link.component';
import styles from './menu.component.module.scss';

export function MenuComponent() {
  return (
    <nav className={styles.container}>
      <ActiveLinkComponent
        href="/"
        text="About"
      />
      <ActiveLinkComponent
        href="/releases"
        text="Releases"
      />
    </nav>
  );
}
