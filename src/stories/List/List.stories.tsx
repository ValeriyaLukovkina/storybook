import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import List from "./List";
import ListItem from "../ListItem/ListItem";
import { Selected, Unselected } from "../ListItem/ListItem.stories";

type ItemData = {
  label: string;
  selected: boolean;
};

type ListPropsAndCustomArgs = React.ComponentProps<typeof List> & {
  items?: ItemData[];
};

const meta: Meta<ListPropsAndCustomArgs> = {
  title: "Example/List",
  component: List,
  subcomponents: { ListItem },
};

export default meta;
type Story = StoryObj<ListPropsAndCustomArgs>;

// Используя subcomponents
export const OneItemSubcomponents: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem label="item" />
    </List>
  ),
  args: {
    title: 'Заголовок'
  }
};

export const ManyItems: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem {...Selected.args} />
      <ListItem {...Unselected.args} />
      <ListItem {...Unselected.args} />
    </List>
  ),
};

const ListTemplate: Story = {
  render: ({ items, ...args }) => {
    return <List>{items?.map((item) => <ListItem {...item} />)}</List>;
  },
};

export const OneItem = {
  ...ListTemplate,
  args: {
    items: [{ ...Selected.args }, { ...Unselected.args }],
  },
};
