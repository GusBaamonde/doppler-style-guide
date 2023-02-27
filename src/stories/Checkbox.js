import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({
  disabled,
  label,
  checked,
  isError,
  errorMessage,
}) => {
  return html`
    <label role="checkbox" aria-invalid="${isError}" aria-errormessage="errmsj1">
        <input type="checkbox" .disabled="${disabled}" .checked="${checked}"></input>
        <span>${label}</span>
    </label>
    <p id="errmsj1" class="dp-errormessage">${errorMessage}</p>
  `;
};
