import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {useActiveLinkComponent} from './hooks/use-active-link-component';
import styles from './active-link.component.module.scss';

const propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

/**
 * Component to render an active link
 *
 * @param {object} props - Component props
 * @param {string} props.href - Link href
 * @param {string} props.text - Link text
 * @returns {React.ReactElement} - Active link component
 */
export function ActiveLinkComponent({
  href,
  text,
}) {
  const {active} = useActiveLinkComponent(href);

  return (
    <Link href={href}>
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

ActiveLinkComponent.propTypes = propTypes;
