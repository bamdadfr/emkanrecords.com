import React from 'react';
import Image from 'next/image';
import styles from './header.component.module.scss';
import headerImage from '../../../public/header/header_bright.png';

/**
 * Component to render the header of the application
 *
 * @returns {React.ReactElement} - Header component
 */
export function HeaderComponent() {
  return (
    <>
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
    </>
  );
}
