import Image from 'next/legacy/image';
import headerImage from 'public/header/header_bright.png';
import React from 'react';

import styles from './header.component.module.scss';

export function HeaderComponent() {
  return (
    <header className={styles.container}>
      <Image
        alt="logo"
        src={headerImage}
        layout="intrinsic"
        width={360}
        height={128}
        placeholder="blur"
      />
    </header>
  );
}
