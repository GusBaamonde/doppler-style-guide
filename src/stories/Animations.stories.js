import { Animations } from "./Animations.js";

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Animations",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {},
};

// More on component templates:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => Animations(args);

export const Saving = Template.bind();
Saving.args = { label: "Saving" };
