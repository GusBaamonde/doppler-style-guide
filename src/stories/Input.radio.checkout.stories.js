import { InputRadioCheckout } from "./Input.radio.checkout";

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Input.radio.checkout",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {},
};

// More on component templates:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => {
  return InputRadioCheckout(args);
};

export const Default = Template.bind({});
Default.args = {};
