import React from 'react';
import PropTypes from 'prop-types';
import { MetaComponent } from '../../components/meta/meta.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { FadeAnimation } from '../../animations/fade/fade.animation';
import styles from './default.layout.module.scss';

const propTypes = {
  children: PropTypes.oneOfType ([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  customMeta: PropTypes.bool,
};

const defaultProps = {
  customMeta: false,
};

/**
 * Component to render the default layout
 *
 * @param {object} props - Component props
 * @param {React.ReactElement} props.children - Component children
 * @param {boolean} [props.customMeta] - Flag to indicate if the meta component should be rendered
 * @returns {React.ReactElement} - Rendered component
 */
export function DefaultLayout ({
  children,
  customMeta = defaultProps.customMeta,
}) {
  return (
    <>
      {!customMeta && <MetaComponent />}
      <MenuComponent />
      <main className={styles.container}>
        <FadeAnimation>
          {children}
        </FadeAnimation>
      </main>
      <FooterComponent />
    </>
  );
}

DefaultLayout.propTypes = propTypes;
DefaultLayout.defaultProps = defaultProps;
