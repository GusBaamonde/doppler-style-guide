import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Animations = ({ label }) => {
  return html`<div class="dp-animate--saving">
    <span>${label}</span>
    <div class="pulse"></div>
  </div>`;
};
