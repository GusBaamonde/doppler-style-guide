import { Animations } from "./Animations";

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Animations",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    animationName: {
      control: { type: "select" },
      defaultValue: "pulse",
      options: ["pulse"],
    },
  },
};

// More on component templates:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => Animations(args);

export const Default = Template.bind({});
