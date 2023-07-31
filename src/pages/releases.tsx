import {Fragment} from 'react';

import {releases} from '../app/data/releases';
import {MetaComponent} from '../components/meta/meta.component';
import {ReleaseComponent} from '../components/release/release.component';
import {DefaultLayout} from '../layouts/default/default.layout';
import styles from './releases.module.scss';

/**
 * Releases page
 * Path: /releases
 */
export default function Releases() {
  return (
    <>
      <MetaComponent title="Releases | Emkan Records" />
      <DefaultLayout customMeta>
        <h1 style={{display: 'none'}}>releases</h1>
        <div className={styles.container}>
          {[...releases]
            .sort((a, b) => b.id - a.id)
            .map((release) => (
              <Fragment key={release.id}>
                <ReleaseComponent release={release} />
              </Fragment>
            ))}
        </div>
      </DefaultLayout>
    </>
  );
}
