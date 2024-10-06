import Link from 'next/link';
import React, {ReactElement} from 'react';

import styles from './active-link.component.module.scss';
import {useActiveLinkComponent} from './hooks/use-active-link-component';

interface ActiveLinkComponentProps {
  href: string;
  text: string;
}

export function ActiveLinkComponent({
  href,
  text,
}: ActiveLinkComponentProps): ReactElement {
  const {active} = useActiveLinkComponent(href);

  return (
    <Link
      href={href}
      legacyBehavior
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a>
        <button
          type="button"
          className={active ? styles.active : styles.link}
        >
          {text}
        </button>
      </a>
    </Link>
  );
}
