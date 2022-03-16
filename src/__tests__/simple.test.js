import React from 'react';
import App from '../App';
import "@testing-library/jest-dom/extend-expect";
import { cleanup, act, fireEvent, render, screen, waitFor } from "@testing-library/react";

it('simple render', () => {
  render(<App />);
//   expect(screen.getByText('')).toBeInTheDocument();
});

it("split card expand split diagram", async () => {
    let component;
    await act(async () => {
        component = render(
            <App />
        );
    });

    const { getByTestId, findByTestId, container } = component;

    const splitHeaderNode = getByTestId("split-header-1");

    fireEvent.click(splitHeaderNode);

    const splitContentNode = await findByTestId("split-content");

    expect(splitContentNode).toBeInTheDocument();
});