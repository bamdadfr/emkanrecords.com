import Image from 'next/legacy/image';
import React from 'react';
import {FaItunesNote, FaSpotify, FaYoutube} from 'react-icons/fa';
import {type Release} from 'src/app/data/releases';

import styles from './release.component.module.scss';

interface ReleaseComponentProps {
  release: Release;
}

export function ReleaseComponent({release}: ReleaseComponentProps) {
  const paddedId = release.id.toString().padStart(3, '0');

  return (
    <div>
      <Image
        className={styles.artwork}
        alt={'EMK' + paddedId}
        src={release.image}
        layout="intrinsic"
        width={370}
        height={370}
        placeholder="blur"
      />
      <div className={styles.details}>
        <span className={styles.detailsRelease}>
          <h3>{release.name}</h3>
          <h2>{release.artist}</h2>
        </span>
        <span className={styles.detailsMarket}>
          <a
            className={styles.detailsMarketSpotify}
            href={release.retailers.spotify}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${release.artist} - ${release.name} - spotify`}
          >
            <FaSpotify />
          </a>
          <a
            className={styles.detailsMarketYoutube}
            href={release.retailers.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${release.artist} - ${release.name} - youtube`}
          >
            <FaYoutube />
          </a>
          <a
            className={styles.detailsMarketItunes}
            href={release.retailers.itunes}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${release.artist} - ${release.name} - itunes`}
          >
            <FaItunesNote />
          </a>
        </span>
      </div>
    </div>
  );
}
