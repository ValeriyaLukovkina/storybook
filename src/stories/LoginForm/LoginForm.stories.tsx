import LoginForm from "./LoginForm";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

const meta: Meta<typeof LoginForm> = {
  title: "Example/LoginForm",
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {},
};

export const ValidForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("email"), "email@provider.com");
    await userEvent.type(canvas.getByTestId("password"), "a-random-password");
  },
};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("email"), "email@provider.com");
    await userEvent.type(canvas.getByTestId("password"), "a-random-password");
    await userEvent.click(canvas.getByRole("button"));

    await expect(
      canvas.getByText(
        "Everything is perfect. Your account is ready and we should probably get you started!",
      ),
    ).toBeInTheDocument();
  },
};

export const InvalidForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId("email"), "email@provider.com");
    await userEvent.click(canvas.getByRole("button"));

    await expect(canvas.getByLabelText("invalid-form")).toBeInTheDocument();
  },
};
