import {ReactElement} from 'react';

import {HeaderComponent} from '../../components/header/header.component';

interface AppLayoutProps {
  children: ReactElement;
}

export function AppLayout({children}: AppLayoutProps) {
  return (
    <>
      <section className="page">
        <HeaderComponent />
        {children}
      </section>
    </>
  );
}
