import { Inputs } from "./Button.Tertiary";

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Button.Tertiary",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {},
};

// More on component templates:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => {
  return Inputs(args);
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};
