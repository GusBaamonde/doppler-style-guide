import { Checkbox } from "./Checkbox";

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Checkbox",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {},
};

// More on component templates:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => {
  return Checkbox(args);
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  checked: false,
  isError: false,
  label: "Checkbox default",
  errorMessage: "¡Ouch! Este checkbox no esta tildado",
};
