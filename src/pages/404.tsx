import {DefaultLayout} from '../layouts/default/default.layout';

/**
 * 404 page
 * Path: /404 and any other path that does not exist
 */
export default function NotFoundPage() {
  return (
    <>
      <DefaultLayout>
        <h1>Page Not Found</h1>
      </DefaultLayout>
    </>
  );
}
