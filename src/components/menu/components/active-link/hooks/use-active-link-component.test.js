import { renderHook } from '@testing-library/react-hooks'
import { useActiveLinkComponent } from './use-active-link-component'

jest.mock ('next/router', () => ({

    useRouter () {

        return {
            'route': '/',
            'pathname': '/match',
            'query': '',
            'asPath': '',
        }

    },
}))

describe ('useActiveLinkComponent', () => {

    describe ('active', () => {

        it ('should return false when href is not matching router.pathname', () => {

            const { result } = renderHook (() => useActiveLinkComponent ('/nomatch'))

            expect (result.current.active).toBe (false)

        })

        it ('should return false when href is matching router.pathname', () => {

            const { result } = renderHook (() => useActiveLinkComponent ('/match'))

            expect (result.current.active).toBe (true)

        })

    })

})