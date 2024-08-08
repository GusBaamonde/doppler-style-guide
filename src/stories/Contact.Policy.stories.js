import { Contact } from "./Contact.Policy";

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Contact.Policy",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {},
};

// More on component templates:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => {
  return Contact(args);
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  isError: false,
  label: "Assisted text for field validations in this component",
};
