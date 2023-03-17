import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({ disabled, label, labelRequired, isError }) => {
  return html`
    <div class="awa-form" style="width:350px;">
      <label
        for="tel"
        class="labelcontrol"
        aria-disabled="${disabled}"
        data-required="${labelRequired}"
      >
        ${label}
        <input
          type="tel"
          id="tel"
          name="tel"
          placeholder="Your Phone"
          aria-required="true"
          aria-invalid="${isError}"
          aria-placeholder="Your Phone"
          .disabled="${disabled}"
        />
        <div class="assistance-wrap">
          <span>Assistive text</span>
        </div>
      </label>
    </div>
  `;
};
