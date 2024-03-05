import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const isoText = ({}) => {
  return html`
    <div class="dp-container">
      <div class="dp-rowflex">
        <div class="col-sm-12 m-t-24 m-b-36">
          <div class="m-t-24">
            <p class="m-b-18">
              <strong>Titulos primarios</strong> o los mas relevantes dentro del
              layout:
            </p>

            <h2 class="dp-first-order-title">
              ¿Quieres agrega un pack de landings?
              <span class="dpicon iconapp-landing-page"></span>
            </h2>

            <h2 class="dp-first-order-title">
              Elige tu plan de marketing
              <span class="dpicon iconapp-email-alert"></span>
            </h2>

            <h2 class="dp-first-order-title">
              ¿Quieres agrega un plan de chat?
              <span class="dpicon iconapp-chatting"></span>
            </h2>

            <h2 class="dp-first-order-title">
              Finaliza tu compra
              <span class="dpicon iconapp-fast-money"></span>
            </h2>

            <h2 class="dp-first-order-title">
              Disfruta Doppler <span class="dpicon iconapp-launch"></span>
            </h2>

            <h2 class="dp-first-order-title">
              Descubre nuestros add-ons
              <span class="dpicon iconapp-add-product"></span>
            </h2>
          </div>
          <div class="m-t-42">
            <p class="m-b-18">
              <strong>Titulos secundarios</strong> o menos relevantes dentro del
              layout:
            </p>

            <h3 class="dp-second-order-title">
              ¿Cuántos contactos deseas agregar a tu plan?
            </h3>

            <h3 class="dp-second-order-title">
              ¿Cuántas conversaciones necesitas por mes?
            </h3>

            <h3 class="dp-second-order-title">Beneficios plan de chat</h3>

            <h3 class="dp-second-order-title">
              Whatsapp Premium <span class="dpicon iconapp-chatting"></span>
            </h3>

            <h3 class="dp-second-order-title">
              Crédito en SMS
              <span class="dpicon iconapp-mobile-messaging"></span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  `;
};
