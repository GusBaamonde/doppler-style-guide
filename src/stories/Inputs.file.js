import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({ disabled, label, isError }) => {
  return html`
    <div class="awa-form m-t-42" style="width:450px;">
      <label
        id="drop-zone"
        for="pdf"
        class="dp-label-dropfile"
        data-dropfile="${label}"
        data-legend="Debe ser menor a 25 megas"
        aria-disabled="${disabled}"
        aria-invalid="${isError}"
      >
        <span class="dp-drop-placeholder">Arrastrar archivo aquí o</span>
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
