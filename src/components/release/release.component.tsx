import Image from 'next/legacy/image';
import {FaShoppingCart, FaSpotify, FaYoutube} from 'react-icons/fa';

import styles from './release.component.module.scss';

interface ReleaseComponentProps {
  id: number;
  artist: string;
  name: string;
  url: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
}

/**
 * Component to display a release
 */
export function ReleaseComponent({
  id,
  artist,
  name,
  url,
  image,
}: ReleaseComponentProps) {
  const paddedId = id.toString().padStart(3, '0');

  return (
    <div>
      <Image
        className={styles.artwork}
        alt={'EMK' + paddedId}
        src={image}
        layout="intrinsic"
        width={370}
        height={370}
        placeholder="blur"
      />
      <div className={styles.details}>
        <span className={styles.detailsRelease}>
          <h3>{name}</h3>
          <h2>{artist}</h2>
        </span>
        <span className={styles.detailsMarket}>
          <a
            className={styles.detailsMarketSpotify}
            href={url + '/spotify'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${artist} - ${name} - spotify`}
          >
            <FaSpotify />
          </a>
          <a
            className={styles.detailsMarketYoutube}
            href={url + '/youtube'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${artist} - ${name} - youtube`}
          >
            <FaYoutube />
          </a>
          <a
            className={styles.detailsMarketCart}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${artist} - ${name} - shop`}
          >
            <FaShoppingCart />
          </a>
        </span>
      </div>
    </div>
  );
}
