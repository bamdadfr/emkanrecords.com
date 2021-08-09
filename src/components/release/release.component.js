import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { FaShoppingCart, FaSpotify, FaYoutube } from 'react-icons/fa'
import styles from './release.component.module.scss'

const propTypes = {
    'id': PropTypes.number.isRequired,
    'artist': PropTypes.string.isRequired,
    'name': PropTypes.string.isRequired,
    'url': PropTypes.string.isRequired,
    'image': PropTypes.shape ({
        'src': PropTypes.string.isRequired,
        'width': PropTypes.number.isRequired,
        'height': PropTypes.number.isRequired,
    }).isRequired,
}

/**
 * @param {object} props react props
 * @param {number} props.id release id
 * @param {string} props.artist release artist
 * @param {string} props.name release name
 * @param {string} props.url release url
 * @param {object} props.image release image (artwork)
 * @returns {React.ReactElement} react component
 */
export function ReleaseComponent ({
    id,
    artist,
    name,
    url,
    image,
}) {

    const paddedId = id.toString ().padStart (3, '0')

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
                    <h3>
                        {name}
                    </h3>
                    <h2>
                        {artist}
                    </h2>
                </span>
                <span className={styles.detailsMarket}>
                    <a
                        className={styles.detailsMarketSpotify}
                        href={url + '/spotify'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${artist} - ${name} - spotify`}
                    >
                        <FaSpotify/>
                    </a>
                    <a

                        className={styles.detailsMarketYoutube}
                        href={url + '/youtube'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${artist} - ${name} - youtube`}
                    >
                        <FaYoutube/>
                    </a>
                    <a
                        className={styles.detailsMarketCart}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${artist} - ${name} - shop`}
                    >
                        <FaShoppingCart/>
                    </a>
                </span>
            </div>
        </div>
    )

}

ReleaseComponent.propTypes = propTypes