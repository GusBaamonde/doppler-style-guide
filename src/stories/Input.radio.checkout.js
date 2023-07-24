import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const InputRadioCheckout = ({ disabled, label, checked, isError }) => {
  return html`
    <p>
      Para que la interacción este completa tiene que tener un intercambio de
      clases dinámico, de selected a notselected
    </p>
    <form class="dp-container m-t-42">
      <fieldset class="dp-rowflex">
        <ul class="field-group" style="width:100%;">
          <li class="field-item col-sm-4 m-b-12">
            <div class="dp-input--radio dp-checkout-radio-selected">
              <span class="dp-label-discount-25">Ahorra 25%</span>
              <label aria-disabled="false">
                <input type="radio" name="radio" checked />
                <span>Contactos</span>
                <div class="dp-footer--radio">
                  <p>Desde <strong>US$8,00*/mes</strong></p>
                </div>
              </label>
            </div>
          </li>
          <li class="field-item col-sm-4 m-b-12">
            <div class="dp-input--radio dp-checkout-radio-notselected">
              <span class="dp-label-discount-15">Ahorra 15%</span>
              <label aria-disabled="false">
                <input type="radio" name="radio" />
                <span>Contactos</span>
                <div class="dp-footer--radio">
                  <p>Desde <strong>US$8,00*/mes</strong></p>
                </div>
              </label>
            </div>
          </li>
          <li class="field-item col-sm-4 m-b-12">
            <div class="dp-input--radio dp-checkout-radio-notselected">
              <span class="dp-label-discount-5">Ahorra 5%</span>
              <label aria-disabled="false">
                <input type="radio" name="radio" />
                <span>Contactos</span>
                <div class="dp-footer--radio">
                  <p>Desde <strong>US$8,00*/mes</strong></p>
                </div>
              </label>
            </div>
          </li>
        </ul>
      </fieldset>
    </form>
    <form class="dp-container m-t-42">
      <fieldset class="dp-rowflex">
        <ul class="field-group" style="width:100%;">
          <li class="field-item col-sm-4 m-b-12">
            <div class="dp-input--radio dp-checkout-radio-selected">
              <span class="dp-label-discount-25">Ahorra 25%</span>
              <label aria-disabled="false">
                <input type="radio" name="radio" checked />
                <span>Contactos</span>
              </label>
            </div>
          </li>
          <li class="field-item col-sm-4 m-b-12">
            <div class="dp-input--radio dp-checkout-radio-notselected">
              <span class="dp-label-discount-15">Ahorra 15%</span>
              <label aria-disabled="false">
                <input type="radio" name="radio" />
                <span>Contactos</span>
              </label>
            </div>
          </li>
          <li class="field-item col-sm-4 m-b-12">
            <div class="dp-input--radio dp-checkout-radio-notselected">
              <span class="dp-label-discount-5">Ahorra 5%</span>
              <label aria-disabled="false">
                <input type="radio" name="radio" />
                <span>Contactos</span>
              </label>
            </div>
          </li>
        </ul>
      </fieldset>
    </form>
    <form class="dp-container m-t-42">
      <fieldset class="dp-rowflex">
        <ul class="field-group" style="width:100%;">
          <li class="field-item col-sm-4 m-b-12">
            <div class="dp-input--radio dp-checkout-radio-notselected">
              <label aria-disabled="true">
                <input type="radio" name="radio" disabled />
                <span>Anual</span>
              </label>
            </div>
          </li>
          <li class="field-item col-sm-4 m-b-12">
            <div class="dp-input--radio dp-checkout-radio-notselected">
              <label aria-disabled="true">
                <input type="radio" name="radio" disabled />
                <span>Semestral</span>
              </label>
            </div>
          </li>
          <li class="field-item col-sm-4 m-b-12">
            <div class="dp-input--radio dp-checkout-radio-selected">
              <label aria-disabled="false">
                <input type="radio" name="radio" checked />
                <span>Trimestral</span>
              </label>
            </div>
          </li>
        </ul>
      </fieldset>
    </form>
  `;
};
