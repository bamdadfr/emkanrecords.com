import { useRouter } from 'next/router'

/**
 * @param {string} href target url
 * @returns {{boolean}} hook return
 */
export function useActiveLinkComponent (href) {

    const router = useRouter ()
    const active = router.pathname === href

    return { active }

}
