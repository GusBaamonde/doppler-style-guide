import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Animations = ({ animationName }) => {
  return html` <div class="${animationName}"></div> `;
};
