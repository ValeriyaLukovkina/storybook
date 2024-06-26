import type { Meta, StoryObj } from "@storybook/react";
import ListItem from "./ListItem";

const meta: Meta<typeof ListItem> = {
  title: "Example/ListItem",
  component: ListItem,
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Unselected: Story = {
  args: {
    label: "Unselected item",
  },
};

export const Selected: Story = {
  args: {
    label: "Selected item",
    selected: true,
  },
};
