import {useRouter} from '__mocks__/next-router';
import {renderHook} from '@testing-library/react-hooks';

import {useGoogleAnalytics} from './use-google-analytics';

afterEach(() => jest.resetAllMocks());

describe('useGoogleAnalytics', () => {
  describe('global', () => {
    it('should be defined', () => {
      const hook = renderHook(() => useGoogleAnalytics());
      expect(hook).toBeDefined();
    });
  });

  describe('events', () => {
    describe('routeChangeComplete', () => {
      it('should mount correctly', () => {
        const MOCK_EVENTS_ON = useRouter().events.on;

        renderHook(() => useGoogleAnalytics());

        expect(MOCK_EVENTS_ON).toHaveBeenCalledTimes(1);
        expect(MOCK_EVENTS_ON.mock.calls[0][0])
          .toEqual('routeChangeComplete');
        expect(typeof MOCK_EVENTS_ON.mock.calls[0][1]).toEqual('function');
      });

      it('should unmount corectly', () => {
        const MOCK_EVENTS_OFF = useRouter().events.off;

        const {unmount} = renderHook(() => useGoogleAnalytics());
        unmount();

        expect(MOCK_EVENTS_OFF).toHaveBeenCalledTimes(1);
        expect(MOCK_EVENTS_OFF.mock.calls[0][0])
          .toEqual('routeChangeComplete');
        expect(typeof MOCK_EVENTS_OFF.mock.calls[0][1]).toEqual('function');
      });
    });
  });
});
