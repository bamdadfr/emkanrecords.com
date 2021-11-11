import React from 'react';
import { DefaultLayout } from '../layouts/default/default.layout';

/**
 * 404 page
 * Path: /404 and any other path that does not exist
 *
 * @returns {React.ReactElement} - 404 page
 */
export default function NotFoundPage () {
  return (
    <>
      <DefaultLayout>
        <h1>
          Page Not Found
        </h1>
      </DefaultLayout>
    </>
  );
}
