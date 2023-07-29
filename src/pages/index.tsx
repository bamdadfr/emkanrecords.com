import {FaAt} from 'react-icons/fa';

import {MetaComponent} from '../components/meta/meta.component';
import {DefaultLayout} from '../layouts/default/default.layout';
import styles from './index.module.scss';

/**
 * Index page
 * Path: /
 */
export default function IndexPage() {
  return (
    <>
      <MetaComponent title="About | Emkan Records" />
      <DefaultLayout customMeta>
        <h1>digital record label from France.</h1>
        <p>
          for more info, or any other concern
          <br />
          please email
          <br />
          <span className={styles.emailPrefix}>hello</span>
          <FaAt className={styles.emailAt} />
          emkanrecords.com
        </p>

        <p>
          feel free to send us your demo at
          <br />
          <span className={styles.emailPrefix}>demo</span>
          <FaAt className={styles.emailAt} />
          emkanrecords.com
          <br />
          soundcloud links only
        </p>
      </DefaultLayout>
    </>
  );
}
