import {useRouter} from 'next/router';

/**
 * Hook to use the active link component
 *
 * @param {string} href - The href of the link
 * @returns {{boolean}} - The active state of the link
 */
export function useActiveLinkComponent(href) {
  const router = useRouter();
  const active = router.pathname === href;
  return {active};
}
