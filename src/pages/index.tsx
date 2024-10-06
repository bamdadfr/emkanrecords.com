import {NextSeo} from 'next-seo';
import React from 'react';
import {FaAt} from 'react-icons/fa';
import {DefaultLayout} from 'src/layouts/default/default.layout';

import styles from './index.module.scss';

function At() {
  return (
    <FaAt className={styles.emailAt} />
  );
}

export default function IndexPage() {
  return (
    <>
      <NextSeo title="About" />
      <DefaultLayout>
        <h1>digital record label from France.</h1>

        <p>
          for more info, or any other concern
          <br />
          please email
          <br />
          <span className={styles.emailPrefix}>hello</span>
          <At />
          emkanrecords (dot) com
        </p>

        <p>
          feel free to send us your demo at
          <br />
          <span className={styles.emailPrefix}>demo</span>
          <At />
          emkanrecords (dot) com
          <br />
          soundcloud links only
        </p>
      </DefaultLayout>
    </>
  );
}
