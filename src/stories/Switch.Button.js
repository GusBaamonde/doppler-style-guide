import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({ disabled, label, labelRequired, isError }) => {
  return html` <div class="m-t-42">
    <h2>Nuetro Switch Button tiene tres estados</h2>
    <h3>Checked</h3>
    <div
      class="dp-text-switch m-b-24"
      style="width: 400px; border-bottom: 1px solid #CCC;
    padding: 18px 0;"
    >
      <div class="dp-switch">
        <input type="checkbox" id="oneCheck1" checked />
        <label for="oneCheck1" aria-disabled="false">
          <span></span>
        </label>
      </div>
      <p>
        Solo hay que agregar el <strong>atributo "checked"</strong> al
        <strong>"input"</strong>, de esta manera nos queda semántico y
        accesible.
      </p>
    </div>
    <h3>Unchecked</h3>
    <div
      class="dp-text-switch m-b-24"
      style="width: 400px; border-bottom: 1px solid #CCC;
    padding: 18px 0;"
    >
      <div class="dp-switch">
        <input type="checkbox" id="oneCheck2" />
        <label for="oneCheck2" aria-disabled="false">
          <span></span>
        </label>
      </div>
      <p>
        En este caso no es necesario agregar ningún atributo al elemento
        <strong>"input"</strong>.
      </p>
    </div>
    <h3>Disabled</h3>
    <div class="dp-text-switch m-b-24" style="width: 400px;padding: 18px 0;">
      <div class="dp-switch">
        <input type="checkbox" id="oneCheck" disabled />
        <label for="oneCheck" aria-disabled="true">
          <span></span>
        </label>
      </div>
      <p>
        En su variante de deshabilitado solo necesitamos agregar el atributo
        <strong>"disabled"</strong> al <strong>"input"</strong> y
        <strong>"aria-disabled="true"</strong> al elemento
        <strong>"label"</strong>.
      </p>
    </div>
  </div>`;
};
