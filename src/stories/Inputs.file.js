import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({
  disabled,
  label,
  labelPlaceholder,
  labelLegend,
  isError,
}) => {
  return html`
    <div class="awa-form m-t-42" style="width:450px;">
      <label
        id="drop-zone"
        for="pdf"
        class="dp-label-dropfile"
        data-dropfile="${label}"
        data-legend="${labelLegend}"
        aria-disabled="${disabled}"
        aria-invalid="${isError}"
      >
        <span class="dp-drop-placeholder">${labelPlaceholder}</span>
        <input
          type="file"
          id="pdf"
          accept="application/pdf"
          hidden
          onchange="console.log('se seleccionaron')"
        />
        <span role="button" class="dp-button button-small secondary-green">
          Cargar archivo
        </span>
      </label>
    </div>
  `;
};
