import React, { useState } from "react";
import { useArgs } from "@storybook/preview-api";
import Checkbox, { CheckboxProps } from "./Checkbox";
import { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof Checkbox> = {
  title: "Example/Checkbox",
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Пример 1
export const DefaultWithArgs: Story = {
  args: {
    text: 'Checkbox'
  }
};

// Пример 2
const CheckboxWithHooks = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const DefaultWithHooks: Story = {
    argTypes: {
    text: { control: 'text' },
    checked: { control: 'boolean' },
  },
  render: () => <CheckboxWithHooks text='Checkbox' />,
};

// Пример 3
const CheckboxWithHooksUpgraded = (args: CheckboxProps) => {
  const [{ checked }, updateArgs] = useArgs();
  const handleChange = () => updateArgs({ checked: !checked });;

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const Default: Story = {
  args: {
    text: 'Checkbox',
    checked: false,
  },
  render: CheckboxWithHooksUpgraded
};

