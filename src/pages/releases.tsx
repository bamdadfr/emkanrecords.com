import {NextSeo} from 'next-seo';
import React, {Fragment} from 'react';

import {releases} from '../app/data/releases';
import {ReleaseComponent} from '../components/release/release.component';
import {DefaultLayout} from '../layouts/default/default.layout';
import styles from './releases.module.scss';

export default function Releases() {
  return (
    <>
      <NextSeo title="Releases"/>
      <DefaultLayout>
        <h1 style={{display: 'none'}}>releases</h1>

        <div className={styles.container}>
          {[...releases]
            .sort((a, b) => b.id - a.id)
            .map((release) => (
              <Fragment key={release.id}>
                <ReleaseComponent release={release}/>
              </Fragment>
            ))}
        </div>
      </DefaultLayout>
    </>
  );
}
