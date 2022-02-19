import React from 'react';
import { render, screen } from "@testing-library/react";
import {TextField} from "./TextField"

describe('TextField test', () => {
    it('TextField has been rendered on app', () => {
        render(<TextField />);
        const inputElement = screen.getByRole('textbox')
        expect(inputElement).toBeInTheDocument();
    })
})