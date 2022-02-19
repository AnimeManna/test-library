import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {Button} from './Button'

describe('Button test', () => {
    
    
    it('Render button', () => {
        const handleClick = jest.fn(() => console.log('click'))
        render(<Button onClick={handleClick}>Click</Button>)
        const buttonText = screen.getByText('Click');
        expect(buttonText).toBeInTheDocument();
    })
    
    it('After click on the button we see Click in the console', () => {
        const handleClick = jest.fn(() => console.log('click'))
        render(<Button onClick={handleClick}>Click</Button>)
        const buttonText = screen.getByText('Click');
        fireEvent.click(buttonText);
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})