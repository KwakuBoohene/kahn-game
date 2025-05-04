import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RoundCounter from '../RoundCounter';

describe('RoundCounter', () => {
  it('renders round information correctly', () => {
    const setCurrentRound = vi.fn();
    render(
      <RoundCounter 
        currentRound={1} 
      
        roundIsEditable={false}
        setCurrentRound={setCurrentRound}
      />
    );
    
    expect(screen.getByText('ROUND')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('handles editable mode correctly', () => {
    const setCurrentRound = vi.fn();
    render(
      <RoundCounter 
        currentRound={1} 

        roundIsEditable={true}
        setCurrentRound={setCurrentRound}
      />
    );

    const input = screen.getByRole('spinbutton');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(1);

    fireEvent.change(input, { target: { value: '2' } });
    expect(setCurrentRound).toHaveBeenCalledWith(2);
  });

  it('disables input when not editable', () => {
    const setCurrentRound = vi.fn();
    render(
      <RoundCounter 
        currentRound={1} 

        roundIsEditable={false}
        setCurrentRound={setCurrentRound}
      />
    );

    const input = screen.getByRole('spinbutton');
    expect(input).toBeDisabled();
  });

  it('enforces round limits', () => {
    const setCurrentRound = vi.fn();
    render(
      <RoundCounter 
        currentRound={1} 
 
        roundIsEditable={true}
        setCurrentRound={setCurrentRound}
      />
    );

    const input = screen.getByRole('spinbutton');
    
    // Try to set round below 1
    fireEvent.change(input, { target: { value: '0' } });
    expect(setCurrentRound).not.toHaveBeenCalledWith(0);

    // Try to set round above total
    fireEvent.change(input, { target: { value: '6' } });
    expect(setCurrentRound).not.toHaveBeenCalledWith(6);
  });
}); 