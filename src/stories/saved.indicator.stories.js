import { savedIndicator } from "./saved.indicator";

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Saved.Indicator",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    savedIndicator: {
      defaultValue: "state-saved",
      control: { type: "select" },
      options: [
        "state-saved",
        "state-saving",
        "state-error",
        "state-pending",
        "state-idle",
      ],
    },
  },
};

// More on component templates:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => {
  return savedIndicator(args);
};

export const Default = Template.bind({});
Default.args = {
  label: "Estado indicado",
  title: "Estado indicado",
};
