import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { composeStories } from "@storybook/react";

import * as FormStories from "./LoginForm.stories";

const { InvalidForm, FilledForm } = composeStories(FormStories);

test("Tests invalid form state", async () => {
  const { container } = render(<InvalidForm />);

  await InvalidForm.play({ canvasElement: container });

  const isFormValid = screen.getByLabelText("invalid-form");
  expect(isFormValid).toBeInTheDocument();
});

test("Tests filled form", async () => {
  const { container } = render(<FilledForm />);

  await FilledForm.play({ canvasElement: container });

  const buttonElement = screen.getByRole("button");

  fireEvent.click(buttonElement);

  const isFormValid = screen.queryByLabelText("invalid-form");

  expect(isFormValid).not.toBeInTheDocument();
});
