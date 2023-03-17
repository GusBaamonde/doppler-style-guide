import { Inputs } from "./Inputs.password";

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Inputs.password",
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
  isError: false,
  labelRequired: false,
  label: "Your Password",
};
