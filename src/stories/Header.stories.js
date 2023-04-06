import { Header } from "./Header";

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Header",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    clientManagerContent: {
      defaultValue: "none",
      control: { type: "select" },
      options: ["none", "text", "image"],
    },
    accountState: {
      defaultValue: "none",
      control: { type: "select" },
      options: ["none", "info", "warning", "blocker"],
    },
  },
};

// More on component templates:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => {
  return Header(args);
};

export const Default = Template.bind({});
Default.args = {
  hasDopplerLogo: true,
};
