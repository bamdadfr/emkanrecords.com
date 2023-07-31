import Image from 'next/legacy/image';

import headerImage from '../../../public/header/header_bright.png';
import styles from './header.component.module.scss';

/**
 * Component to render the header of the application
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
