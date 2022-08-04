import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size,
  disabled,
  loading,
  preloading,
  color,
  label,
  rounded,
  onClick,
  mode,
}) => {
  if (preloading) {
    label = "";
  }

  return html`
    <button
      type="button"
      class="${[
        "dp-button button-big",
        `${mode}-${color}`,
        `button-${size || "medium"}`,
        loading ? "button--loading" : "",
        rounded ? "button--round" : "",
        preloading ? "button--centered-loading" : "",
      ].join(" ")}"
      @click="${onClick}"
      .disabled="${disabled}"
    >
      ${label}
    </button>
  `;
};
