import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const InputRadioCheckout = ({ disabled, label, checked, isError }) => {
  return html`
    <div class="m-t-30 m-b-48">
      <p>
        Elige el tipo de Plan y estima su precio deslizando el botón, de acuerdo
        al número de Contactos, Envíos o Créditos que necesites.
      </p>
      <form class="dp-container p-t-42 p-b-42">
        <fieldset class="dp-rowflex">
          <ul class="field-group" style="width:100%;">
            <li class="field-item col-sm-4 m-b-12">
              <div class="dp-input--radio dp-checkout-radio-selected">
                <label aria-disabled="false">
                  <span class="dp-label-discount-25">Ahorra 25%</span>
                  <input type="radio" name="radio" checked />
                  <span>Contactos</span>
                  <div class="dp-footer--radio">
                    <p>Desde <strong>US$8,00*/mes</strong></p>
                  </div>
                </label>
                <div class="dp-show-info">
                  <p>
                    Planes basados en la cantidad de Contactos, sin límite de
                    envíos. ¡Pagando por adelantado ahorras hasta 25%!
                  </p>
                </div>
              </div>
            </li>
            <li class="field-item col-sm-4 m-b-12">
              <div class="dp-input--radio dp-checkout-radio-notselected">
                <label aria-disabled="false">
                  <span class="dp-label-discount-15">Ahorra 15%</span>
                  <input type="radio" name="radio" />
                  <span>Envíos</span>
                  <div class="dp-footer--radio">
                    <p>Desde <strong>US$8,00*/mes</strong></p>
                  </div>
                </label>
                <div class="dp-show-info">
                  <p>
                    Planes ideales para quienes envían gran cantidad de
                    Campañas, ya que tienen menor costo unitario por Email.
                  </p>
                </div>
              </div>
            </li>
            <li class="field-item col-sm-4 m-b-12">
              <div class="dp-input--radio dp-checkout-radio-notselected">
                <label aria-disabled="false">
                  <span class="dp-label-discount-5">Ahorra 5%</span>
                  <input type="radio" name="radio" />
                  <span>Créditos</span>
                  <div class="dp-footer--radio">
                    <p>Desde <strong>US$8,00*/mes</strong></p>
                  </div>
                </label>
                <div class="dp-show-info">
                  <p>
                    Planes ideales para quienes envían Campañas esporádicamente.
                    ¡Los créditos son acumulables y no tienen vencimiento!
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>

    <p>
      Para que la interacción este completa tiene que tener un intercambio de
      clases dinámico, de selected a notselected
    </p>
    <form class="dp-container m-t-42">
      <fieldset class="dp-rowflex">
        <ul class="field-group" style="width:100%;">
          <li class="field-item col-sm-4 m-b-12">
            <div class="dp-input--radio dp-checkout-radio-selected">
              <label aria-disabled="false">
                <span class="dp-label-discount-25">Ahorra 25%</span>
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
              <label aria-disabled="false">
                <span class="dp-label-discount-15">Ahorra 15%</span>
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
              <label aria-disabled="false">
                <span class="dp-label-discount-5">Ahorra 5%</span>
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
              <label aria-disabled="false">
                <span class="dp-label-discount-25">Ahorra 25%</span>
                <input type="radio" name="radio" checked />
                <span>Contactos</span>
              </label>
            </div>
          </li>
          <li class="field-item col-sm-4 m-b-12">
            <div class="dp-input--radio dp-checkout-radio-notselected">
              <label aria-disabled="false">
                <span class="dp-label-discount-15">Ahorra 15%</span>
                <input type="radio" name="radio" />
                <span>Contactos</span>
              </label>
            </div>
          </li>
          <li class="field-item col-sm-4 m-b-12">
            <div class="dp-input--radio dp-checkout-radio-notselected">
              <label aria-disabled="false">
                <span class="dp-label-discount-5">Ahorra 5%</span>
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
    <form class="dp-container m-t-42">
      <fieldset class="dp-rowflex">
        <ul class="field-group" style="width:100%;">
          <li class="field-item col-sm-4 m-b-12">
            <div class="dp-input--radio dp-checkout-radio-notselected">
              <label aria-disabled="true">
                <span class="dp-label-discount-25">Ahorra 25%</span>
                <input type="radio" name="radio" disabled />
                <span>Anual</span>
              </label>
            </div>
          </li>
          <li class="field-item col-sm-4 m-b-12">
            <div class="dp-input--radio dp-checkout-radio-notselected">
              <label aria-disabled="true">
                <span class="dp-label-discount-15">Ahorra 15%</span>
                <input type="radio" name="radio" disabled />
                <span>Semestral</span>
              </label>
            </div>
          </li>
          <li class="field-item col-sm-4 m-b-12">
            <div class="dp-input--radio dp-checkout-radio-notselected">
              <label aria-disabled="true">
                <span class="dp-label-discount-5">Ahorra 5%</span>
                <input type="radio" name="radio" disabled />
                <span>Trimestral</span>
              </label>
            </div>
          </li>
        </ul>
      </fieldset>
    </form>
  `;
};
