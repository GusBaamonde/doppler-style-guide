import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({}) => {
  return html`
    <div class="dp-shopping-card m-t-42" style="width: 430px">
      <header>
        <h3>Resumen de compra</h3>
      </header>
      <section>
        <h4>Frecuencia de pago</h4>
        <ul class="dp-payment-frequency">
          <li>
            <p>Anual<span class="dp-discount">-25%</span></p>
          </li>
          <li>
            <p>Semestral<span class="dp-discount">-15%</span></p>
          </li>
          <li class="dp-active">
            <p>Trimestral<span class="dp-discount">-5%</span></p>
          </li>
          <li><p>Mensual</p></li>
        </ul>
      </section>
      <section class="dp-promocode">
        <a
          class="dp-show-promocode"
          data-text-show="¿Tienes un código promocional?"
          data-text-hide="Ingresa tu código promocional"
        >
          <span class="dp-show-text">¿Tienes un código promocional? </span>
          <span class="ms-icon icon-close rotation" title="Cerrar"></span>
        </a>
        <form class="awa-form dp-form-promocode">
          <fieldset>
            <ul class="field-group">
              <li class="field-item field-item--70">
                <label
                  for="promocode"
                  class="labelcontrol"
                  aria-disabled="false"
                  data-required="false"
                >
                  <input
                    type="text"
                    id="text"
                    name="promocode"
                    placeholder="PROMO50%"
                    aria-required="true"
                    aria-invalid="false"
                    aria-placeholder="Your Email"
                  /><!-- class="dp-approved" -->
                  <div class="assistance-wrap">
                    <span>Assistive text</span>
                  </div>
                  <button
                    type="button"
                    class="dp-btn-delete dpicon iconapp-delete"
                    title="borrar"
                  ></button>
                </label>
              </li>
              <li class="field-item field-item--30">
                <button class="dp-button button-medium ctaTertiary">
                  Aplicar
                </button>
              </li>
            </ul>
          </fieldset>
        </form>
        <div class="dp-simulated-price bounceIn" style="display: none">
          <span class="dp-strike">US$X8,00*/mes</span>
          <h3>US$X4,00*/mes</h3>
          <span>Durante 3 meses</span>
        </div>
        <div class="dp-wrap-message dp-wrap-warning" style="display: none">
          <span class="dp-message-icon"></span>
          <div class="dp-content-message">
            <p>
              El uso de código de descuento es valido solamente con el pago
              mensual.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h4>Suscripciones</h4>
        <div class="dp-plan-box">
          <h4>Plan marketing</h4>
          <ul class="dp-purchase-items">
            <li>
              <p class="dp-mark dp-strike">Incluye hasta 5.000 contactos</p>
            </li>
            <li>
              <p class="dp-mark">Promocode eliminar</p>
              <button
                type="button"
                class="dp-btn-delete dpicon iconapp-delete"
                title="borrar"
              ></button>
            </li>
            <li><p class="dp-mark">Incluye hasta 5.000 contactos</p></li>
            <li>
              <p class="dp-mark">
                Decuento Código promocional 3/meses<span class="dp-discount"
                  >-5%</span
                >
              </p>
            </li>
          </ul>
          <hr />
          <ul class="dp-items-result">
            <li>
              <p class="dp-discount">Ahorra 25%</p>
              <span class="dp-strike">US$ 576,00*</span>
            </li>
            <li>
              <p class="dp-discount">Facturación anual</p>
              <span>US$ 432,00*</span>
            </li>
          </ul>
        </div>
        <div class="dp-plan-box">
          <h4>Plan chat</h4>
          <button class="dp-icon-close"></button>
          <ul class="dp-purchase-items">
            <li>
              <p class="dp-mark">Incluye hasta 1.000 conversaciones</p>
            </li>
          </ul>
          <hr />
          <ul class="dp-items-result">
            <li>
              <p class="dp-discount">Ahorra 25%</p>
              <span class="dp-strike">US$ 288,00*</span>
            </li>
            <li>
              <p class="dp-discount">Facturación anual</p>
              <span>US$ 216,00*</span>
            </li>
          </ul>
        </div>
        <hr class="m-t-24 m-b-24" />
        <div class="dp-box-price">
          <h3 class="dp-total-purchase">Total <span>US$ 648,00*</span></h3>
        </div>
        <button class="dp-button button-big primary-green">
          Comprar ahora
        </button>
        <button type="button" class="dp-button button-big dp-secure-payment">
          <span class="ms-icon dpicon iconapp-padlock"></span>Pago seguro
        </button>
        <div class="dp-wrap-message dp-wrap-cancel">
          <span class="dp-message-icon"></span>
          <div class="dp-content-message">
            <p>
              ¡Ouch! Tu método de pago ha sido rechazado. Modíficalo e intenta
              nuevamente.
            </p>
          </div>
        </div>
      </section>
      <footer>
        <ul>
          <li>
            Suscripción con renovación automática, puedes cancelarla cuando lo
            desees.
          </li>
          <li>
            *El precio no incluye impuestos.
            <a href="#">Cuáles son los impuestos por pais?</a>
          </li>
        </ul>
      </footer>
    </div>
  `;
};
