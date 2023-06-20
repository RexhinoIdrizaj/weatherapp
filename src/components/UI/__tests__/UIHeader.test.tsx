import React from 'react';
import { render, screen } from '@testing-library/react-native';

import UIHeader from '../UIHeader';
import { TTestKeys } from '../../../models';

describe('UIHeader', () => {
  it('renders title', () => {
    const title = 'Header Title';
    render(<UIHeader title={title} />);
    const titleEl = screen.getByTestId(TTestKeys.UIHeaderTitle);
    expect(titleEl.props.children).toBe(title);
  });
});
