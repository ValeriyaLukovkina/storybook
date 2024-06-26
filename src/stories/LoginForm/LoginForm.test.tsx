import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/react';

import Meta, { InvalidForm as InvalidFormStory } from './LoginForm.stories';

const FormError = composeStory(InvalidFormStory, Meta);

test('Checks if the form is valid', async () => {
  const { container } = render(<FormError />);

  await FormError.play({ canvasElement: container });

  const isFormValid = screen.getByLabelText("invalid-form");
  expect(isFormValid).toBeInTheDocument();
});
