import { UndoRedo } from "./Undo.Redo";

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Undo.Redo",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {},
};

// More on component templates:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => {
  return UndoRedo(args);
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  labelUndo: "Your title",
  labelRedo: "Your title",
};
