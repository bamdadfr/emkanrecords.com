import {NextSeo} from 'next-seo';
import React, {type ReactElement} from 'react';
import {FadeAnimation} from 'src/animations/fade/fade.animation';
import {FooterComponent} from 'src/components/footer/footer.component';
import {MenuComponent} from 'src/components/menu/menu.component';

import styles from './default.layout.module.scss';

interface DefaultLayoutProps {
  children: ReactElement | ReactElement[];
}

export function DefaultLayout({
  children,
}: DefaultLayoutProps) {
  return (
    <>
      <NextSeo
        noindex={false}
        nofollow={false}
      />
      <MenuComponent/>
      <main className={styles.container}>
        <FadeAnimation>{children}</FadeAnimation>
      </main>
      <FooterComponent/>
    </>
  );
}
