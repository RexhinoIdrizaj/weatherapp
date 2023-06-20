import React, { PropsWithChildren } from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { ProviderTheme } from '../../providers';
import useThemedStyles from '../useThemedStyles';
import { THEME_LIGHT } from '../../theme';

describe('useThemedStyles', () => {
  it('should return themed styles and theme', () => {
    const styles = () => ({
      wrapper: {
        background: 'white',
      },
    });

    const wrapper = ({ children }: PropsWithChildren) => (
      <ProviderTheme>{children}</ProviderTheme>
    );

    const { result } = renderHook(() => useThemedStyles(styles), { wrapper });

    const [themedStyles, receivedTheme] = result.current;

    expect(themedStyles).toBeDefined();
    expect(receivedTheme).toEqual(THEME_LIGHT);
  });
});
