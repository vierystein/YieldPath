// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders YieldPath title', () => {
    render(<App />);
    const titleElement = screen.getByText(/YieldPath/i);
    expect(titleElement).toBeInTheDocument();
});
