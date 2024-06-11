import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";
import { Button } from "./Button";
import { action } from "@storybook/addon-actions";
import { withActions } from "@storybook/addon-actions/decorator";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    // actions: {
    //   handles: ['mouseover', 'click'],
    // },
    // controls: { expanded: true },
    controls: { exclude: ["onClick"] },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: action('on-click') },
  // decorators: [withActions],
} satisfies Meta<typeof Button>;

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


// export const Small: Story = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
//     // play: async ({ canvasElement }) => {
//   //   const canvas = within(canvasElement);

//   //   await userEvent.click(canvas.getByRole("button"));
//   // },
// };

export const Example: Story = {
  args: {
    label: "Button",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/VDj5k1hAovswAx1LJp9jam/Untitled?node-id=0-19&t=cNjMmx7WJo9sNg47-1",
    },
  },
};
