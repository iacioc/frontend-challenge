import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import BaseButton from '../BaseButton';

describe('BaseButton', () => {
  it('renders without crashing', () => {
    const sampleText = 't';
    render(
      <BaseButton text={sampleText} />
    );

    expect(screen.getByText(sampleText)).toBeVisible();
  });
});