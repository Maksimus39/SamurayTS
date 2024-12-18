import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ProfileStatus } from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        render(<ProfileStatus status='it-kamasutra.com' updateStatus={() => {}} />);
        const spanElement = screen.getByText('it-kamasutra.com');
        expect(spanElement).toBeInTheDocument();
    });

    test('after creation span should be displayed', () => {
        render(<ProfileStatus status='it-kamasutra.com' updateStatus={() => {}} />);
        const spanElement = screen.getByText('it-kamasutra.com');
        expect(spanElement).toBeInTheDocument();
    });

    test('after creation input should not be displayed', () => {
        render(<ProfileStatus status='it-kamasutra.com' updateStatus={() => {}} />);
        const inputElement = screen.queryByPlaceholderText('Hello my friends');
        expect(inputElement).not.toBeInTheDocument();
    });

    test('after creation span should contains correct status', () => {
        render(<ProfileStatus status='it-kamasutra.com' updateStatus={() => {}} />);
        const spanElement = screen.getByText('it-kamasutra.com');
        expect(spanElement).toBeInTheDocument();
    });

    test('input should be displayed in editMode instead of span', () => {
        render(<ProfileStatus status='it-kamasutra.com' updateStatus={() => {}} />);
        const spanElement = screen.getByText('it-kamasutra.com');
        fireEvent.doubleClick(spanElement);
        const inputElement = screen.getByPlaceholderText('Hello my friends');
        expect(inputElement).toBeInTheDocument();
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        render(<ProfileStatus status='it-kamasutra.com' updateStatus={mockCallback} />);
        const spanElement = screen.getByText('it-kamasutra.com');
        fireEvent.doubleClick(spanElement);
        const inputElement = screen.getByPlaceholderText('Hello my friends');
        fireEvent.change(inputElement, { target: { value: 'new status' } });
        fireEvent.blur(inputElement);
        expect(mockCallback).toHaveBeenCalledWith('new status');
    });
});
