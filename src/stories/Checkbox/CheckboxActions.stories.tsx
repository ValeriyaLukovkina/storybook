
import { within, userEvent, expect, fn } from "@storybook/test";
import Checkbox from "./Checkbox";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  title: "Example/CheckboxAction",
  component: Checkbox,
  args: { onChange: fn() },
  tags: ['!autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  args: {
    text: "Checkbox",
  },
};


export const Checked: Story = {
  args: {
    text: "Checkbox",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");

    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  },
};
