import React from 'react';
import '@testing-library/jest-dom';
import {render, screen, fireEvent} from '@testing-library/react';
import { BackButton } from '../NavigationButtons';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('NavigationButtons', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render BackButton correctly', () => {
    const backText = 'BACK';
    const sampleUrl = 'url';

    render(
      <BackButton url={sampleUrl} />
    );

    expect(screen.getByText(backText)).toBeVisible();

    fireEvent.click(screen.getByText(backText));

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(sampleUrl);
  });
});