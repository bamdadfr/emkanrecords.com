import {ReactElement} from 'react';

import {FadeAnimation} from '../../animations/fade/fade.animation';
import {FooterComponent} from '../../components/footer/footer.component';
import {MenuComponent} from '../../components/menu/menu.component';
import {MetaComponent} from '../../components/meta/meta.component';
import styles from './default.layout.module.scss';

interface DefaultLayoutProps {
  children: ReactElement | ReactElement[];
  customMeta?: boolean;
}

const defaultProps = {
  customMeta: false,
};

/**
 * Component to render the default layout
 */
export function DefaultLayout({
  children,
  customMeta = defaultProps.customMeta,
}: DefaultLayoutProps) {
  return (
    <>
      {!customMeta && <MetaComponent />}
      <MenuComponent />
      <main className={styles.container}>
        <FadeAnimation>{children}</FadeAnimation>
      </main>
      <FooterComponent />
    </>
  );
}
