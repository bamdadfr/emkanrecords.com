import {useRouter} from 'next/router';

interface UseActiveLinkComponent {
  active: boolean;
}

export function useActiveLinkComponent(href: string): UseActiveLinkComponent {
  const router = useRouter();
  const active = router.pathname === href;

  return {
    active: active,
  };
}
