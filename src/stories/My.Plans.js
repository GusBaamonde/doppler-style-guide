import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({ disabled }) => {
  return html`
    <section class="dp-library">
      <header class="hero-banner">
        <div class="dp-container">
          <div class="dp-rowflex">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <h2 class="dp-first-order-title">
                Mi Plan <span class="dpicon iconapp-checklist"></span>
              </h2>
            </div>
            <div class="col-sm-7">
              <p>
                Lorem ipsum dolor sit amet consectetur. Ac eleifend diam
                lobortis montes eget proin purus. Faucibus viverra suspendisse
                molestie viverra.
              </p>
            </div>
          </div>
          <span class="arrow"></span>
        </div>
      </header>
      <div class="dp-container">
        <div class="dp-rowflex">
          <nav class="tabs-wrapper">
            <ul class="tabs-nav" data-tab-active="1">
              <li class="tab--item">
                <a href="#" class="tab--link active">Detalle de suscripción</a>
              </li>
              <li class="tab--item">
                <a href="#" class="tab--link">Add- ons</a>
              </li>
              <li class="tab--item">
                <a href="#" class="tab--link">Método de Pago</a>
              </li>
              <li class="tab--item">
                <a href="#" class="tab--link">Historial de Facturación</a>
              </li>
            </ul>
            <!-- nav -->
            <div class="tabs-bg"></div>
          </nav>
          <div class="tab--container active col-sm-12">
            <article class="tab--content active">
              <div class="dp-container col-p-l-0 col-p-r-0">
                <div class="dp-rowflex">
                  <div class="col-lg-8 col-md-12 m-b-24">
                    <div class="dp-box-shadow m-b-24">
                      <article class="dp-wrapper-plan">
                        <header>
                          <div class="dp-title-plan">
                            <h3 class="dp-second-order-title">
                              Plan de email marketing
                              <span class="dpicon iconapp-email-alert"></span>
                            </h3>
                            <p>Plan por Contactos</p>
                          </div>
                          <div class="dp-buttons--plan">
                            <button
                              type="button"
                              class="dp-button button-medium ctaTertiary dp-w-100 m-b-12"
                            >
                              Cambiar de plan
                            </button>
                            <button
                              type="button"
                              class="dp-button button-medium dp-w-100 btn-cancel"
                            >
                              Cancelar suscripción
                            </button>
                          </div>
                        </header>
                        <ul class="dp-item--plan">
                          <li>
                            <p><strong>5.000 Contactos</strong></p>
                            <p>4.000/5.000 Contactos disponible</p>
                          </li>
                          <li>
                            <p><strong>Envíos ilimitados</strong></p>
                          </li>
                          <li>
                            <p><strong>Facturación</strong></p>
                            <p>Trimestral</p>
                          </li>
                        </ul>

                        <div class="dp-functionalities">
                          <p><strong>Funcionalidades</strong></p>
                          <div class="dp-func--items">
                            <ul class="col-md-6">
                              <li>
                                Campañas de Email clásicas, sociales y Test A/B.
                              </li>
                              <li>
                                Formularios de Suscripción Clásicos y Pop-up.
                              </li>
                              <li>Flujos Automatizados.</li>
                            </ul>
                            <ul class="col-md-6">
                              <li>Notificaciones Push.</li>
                              <li>Campañas de SMS.</li>
                            </ul>
                          </div>
                        </div>
                        <footer>
                          <a href="#"
                            ><strong>Ver todas las funcionalidades</strong></a
                          >
                        </footer>
                      </article>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <article class="dp-wrapper-plan">
                        <header>
                          <div class="dp-title-plan">
                            <h3 class="dp-second-order-title">
                              Plan de conversaciones
                              <span class="dpicon iconapp-chatting"></span>
                            </h3>
                          </div>
                          <div class="dp-buttons--plan">
                            <button
                              type="button"
                              class="dp-button button-medium ctaTertiary dp-w-100 m-b-12"
                            >
                              Cambiar de plan
                            </button>
                          </div>
                        </header>
                        <ul class="dp-item--plan">
                          <li>
                            <p><strong>500 Conversaciones</strong></p>
                            <p>400/500 Conversaciones disponible</p>
                          </li>
                        </ul>

                        <div class="dp-functionalities">
                          <p><strong>Funcionalidades</strong></p>
                          <div class="dp-func--items">
                            <ul class="col-md-6">
                              <li>Chat en Sitio Web</li>
                              <li>Chat en Facebook Messenger</li>
                              <li>Chat en Instagram</li>
                            </ul>
                            <ul class="col-md-6">
                              <li>Chat en WhatsApp Business API</li>
                              <li>
                                Envio de mensajes en WhatsApp Business API
                              </li>
                              <li>Generador de Leads</li>
                            </ul>
                          </div>
                        </div>
                        <footer>
                          <a href="#"
                            ><strong>Ver todas las funcionalidades</strong></a
                          >
                        </footer>
                      </article>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <article class="dp-wrapper-plan">
                        <header>
                          <div class="dp-title-plan">
                            <h3 class="dp-second-order-title">
                              Pack de Landing pages
                              <span class="dpicon iconapp-landing-page"></span>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet consectetur. Ac
                              eleifend diam lobortis
                            </p>
                          </div>
                          <div class="dp-buttons--plan">
                            <button
                              type="button"
                              class="dp-button button-medium ctaTertiary dp-w-100 m-b-12"
                            >
                              Ver otros Packs
                            </button>
                          </div>
                        </header>
                        <ul class="dp-item--plan">
                          <li>
                            <p><strong>Pack 5 Landing pages</strong></p>
                          </li>
                          <li>
                            <p><strong>Pack 25 Landing pages </strong></p>
                          </li>
                        </ul>

                        <div class="dp-functionalities">
                          <p><strong>Funcionalidades</strong></p>
                          <div class="dp-func--items">
                            <ul class="col-md-6">
                              <li>
                                Lorem ipsum dolor sit amet, consectetur elit.
                              </li>
                              <li>
                                Lorem ipsum dolor sit amet, consectetur elit.
                              </li>
                              <li>
                                Lorem ipsum dolor sit amet, consectetur elit.
                              </li>
                            </ul>
                            <ul class="col-md-6">
                              <li>
                                Lorem ipsum dolor sit amet, consectetur elit.
                              </li>
                              <li>
                                Lorem ipsum dolor sit amet, consectetur elit.
                              </li>
                              <li>
                                Lorem ipsum dolor sit amet, consectetur elit.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <footer>
                          <a href="#"
                            ><strong>Ver todas las funcionalidades</strong></a
                          >
                        </footer>
                      </article>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <article class="dp-wrapper-plan">
                        <header>
                          <div class="dp-title-plan">
                            <h3 class="dp-second-order-title">
                              Envío y automatización de SMS
                              <span
                                class="dpicon iconapp-mobile-messaging"
                              ></span>
                            </h3>
                          </div>
                          <div class="dp-buttons--plan">
                            <button
                              type="button"
                              class="dp-button button-medium ctaTertiary dp-w-100 m-b-12"
                            >
                              Cambiar de Plan
                            </button>
                          </div>
                        </header>
                        <ul class="dp-item--plan">
                          <li>
                            <p><strong>1.500 SMS</strong></p>
                            <p>500/1.500 SMS disponibles</p>
                          </li>
                        </ul>

                        <div class="dp-functionalities">
                          <p><strong>Funcionalidades</strong></p>
                          <div class="dp-func--items">
                            <ul class="col-md-6">
                              <li>Chat en Sitio Web</li>
                              <li>Chat en Facebook Messenger</li>
                              <li>Chat en Instagram</li>
                            </ul>
                            <ul class="col-md-6">
                              <li>Chat en WhatsApp Business API</li>
                              <li>
                                Envio de mensajes en WhatsApp Business API
                              </li>
                              <li>Generador de Leads.</li>
                            </ul>
                          </div>
                        </div>
                        <footer>
                          <a href="#"
                            ><strong>Ver todas las funcionalidades</strong></a
                          >
                        </footer>
                      </article>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-12">
                    <div class="dp-box-shadow"><p>columna</p></div>
                  </div>
                </div>
              </div>
            </article>
            <article class="tab--content">
              <div class="dp-container col-p-l-0 col-p-r-0">
                <div class="dp-rowflex">
                  <div class="col-lg-8 col-md-12 m-b-24">
                    <div class="dp-box-shadow">
                      <p>Content</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-12">
                    <div class="dp-box-shadow"><p>columna</p></div>
                  </div>
                </div>
              </div>
            </article>
            <article class="tab--content">
              <div class="dp-container col-p-l-0 col-p-r-0">
                <div class="dp-rowflex">
                  <div class="col-lg-8 col-md-12 m-b-24">
                    <div class="dp-box-shadow">
                      <p>Content</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-12">
                    <div class="dp-box-shadow"><p>columna</p></div>
                  </div>
                </div>
              </div>
            </article>
            <article class="tab--content">
              <div class="dp-container">
                <div class="dp-rowflex">
                  <div class="col-lg-8 col-md-12 m-b-24">
                    <div class="dp-box-shadow">
                      <p>Content</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-12">
                    <div class="dp-box-shadow"><p>columna</p></div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  `;
};
