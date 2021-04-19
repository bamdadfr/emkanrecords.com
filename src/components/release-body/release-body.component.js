import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { FaShoppingCart, FaSpotify, FaYoutube } from 'react-icons/fa'
import styles from './release-body.module.scss'

function ReleaseBodyComponent ({ children }) {

    const { image, artist, name, url, id } = children
    const paddedId = id.toString ().padStart (3, '0')

    return (
        <div className={styles.release}>
            <Image
                alt={'EMK' + paddedId}
                src={image}
                layout="intrinsic"
                width={370}
                height={370}
            />
            <div>
                <span>
                    <h3>
                        {name}
                    </h3>
                    <h2>
                        {artist}
                    </h2>
                </span>
                <span>
                    <a
                        href={url + '/spotify'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${artist} - ${name} - spotify`}
                    >
                        <FaSpotify/>
                    </a>
                    <a
                        href={url + '/youtube'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${artist} - ${name} - youtube`}
                    >
                        <FaYoutube/>
                    </a>
                    <a
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

ReleaseBodyComponent.propTypes = {
    'children': PropTypes.shape ({
        'image': PropTypes.string.isRequired,
        'artist': PropTypes.string.isRequired,
        'name': PropTypes.string.isRequired,
        'url': PropTypes.string.isRequired,
        'id': PropTypes.number.isRequired,
    }).isRequired,
}

export default ReleaseBodyComponent