import React, {ReactElement} from 'react';
import {HeaderComponent} from 'src/components/header/header.component';

interface AppLayoutProps {
  children: ReactElement;
}

export function AppLayout({children}: AppLayoutProps) {
  return (
    <section className="page">
      <HeaderComponent />
      {children}
    </section>
  );
}
