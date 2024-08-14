import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Summary = ({}) => {
  return html`
    <div style="width: 100%; margin-top: 45px; padding-left: 60px;">
      <header class="hero-banner m-t-48">
        <div class="dp-container">
          <div class="dp-rowflex">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <nav class="dp-breadcrumb">
                <ul>
                  <li>
                    <a href="#">Plan marketing</a>
                  </li>
                  <li>
                    <a href="#">Plan chat</a>
                  </li>
                  <li>Finaliza tu compra</li>
                  <li>Disfruta Doppler</li>
                </ul>
              </nav>
              <h2 class="dp-first-order-title">
                Disfruta Doppler <span class="dpicon iconapp-launch"></span>
              </h2>
            </div>
          </div>
        </div>
      </header>
      <section class="dp-container">
        <div class="dp-rowflex">
          <div class="col-sm-8 m-b-24">
            <div class="dp-wrap-message dp-wrap-success">
              <span class="dp-message-icon"></span>
              <div class="dp-content-message dp-content-full">
                <p>
                  <strong>Tu compra ha sido exitosa!</strong><br />
                  Ya puedes empezar a disfrutar de los beneficios de tus planes
                  de Doppler.
                </p>
                <a href="#" class="dp-message-link">IR AL INICIO</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4 m-b-24"></div>
        </div>
        <div class="dp-rowflex">
          <div class="col-sm-8">
            <h4 class="dp-tit-plan-purchased">Tu plan de email marketing</h4>
            <ul class="dp-purchase-summary-list">
              <li>
                <span>Tipo de Plan</span>
                <h3>Por Contactos</h3>
              </li>
              <li>
                <span>Contactos adquiridos</span>
                <h3>5.000</h3>
              </li>
              <li>
                <span>Facturación</span>
                <h3>Trimestral</h3>
              </li>
            </ul>
          </div>
        </div>
        <div class="dp-rowflex">
          <div class="col-sm-8">
            <h4 class="dp-tit-plan-purchased">Tu plan de chat</h4>
            <ul class="dp-purchase-summary-list">
              <li>
                <span>Tu plan de chat</span>
                <h3>Nombre del plan</h3>
              </li>
              <li>
                <span>Converciones adquiridos</span>
                <h3>3.500</h3>
              </li>
              <li>
                <span>Facturación</span>
                <h3>Mensual</h3>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  `;
};
