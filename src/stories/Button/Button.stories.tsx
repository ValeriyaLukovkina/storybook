import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    size: {
      control: "select",
    },
    backgroundColor: {
      control: "color",
    },
  },
  // parameters: {
  //   layout: "fullscreen",
  //   backgrounds: {
  //     default: "white",
  //     values: [
  //       { name: "white", value: "#ffffff" },
  //       { name: "gray", value: "#f5f3f1" },
  //     ],
  //   },
  // },
  parameters: {
    customParameter: "This is a custom parameter!",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Button",
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    primary: true,
  },
};

export const PrimaryLarge: Story = {
  args: {
    ...Primary.args,
    size: "large",
  },
};

export const ButtonWithDecorator: Story = {
  decorators: [
    (Story, { parameters, args }) => {
      return (
        <div style={{ margin: "40px" }}>
          <Story {...args} />
          <p>Additional Parameter: {parameters.customParameter}</p>
          <p>Args: {JSON.stringify(args)}</p>
        </div>
      );
    },
  ],
  args: {
    ...Primary.args,
    size: "large",
  },
};
