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
                    <div class="dp-box-shadow">
                      <div class="dp-card-grey">
                        <h4>ASESORIA Y ACOMPAÑAMIENTO ESTRATEICO</h4>
                        <h2>
                          Te ayudaremos a alcanzar los objetivos en tus campañas
                        </h2>
                        <p>
                          Revisaremos juntos cada aspecto de tu estrategia
                          actual y te ayudaremos a diseñar el plan de acción
                          ideal para alcanzar tus objetivos.
                        </p>
                        <button
                          type="button"
                          class="dp-button button-medium primary-green dp-w-100"
                        >
                          Solicitar consultoría
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article class="tab--content active">
              <div class="dp-container col-p-l-0 col-p-r-0">
                <div class="dp-rowflex">
                  <div class="col-lg-8 col-md-12 m-b-24">
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Acondicionamiento de Listas
                            <span class="dpicon iconapp-checklist"></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Depuramos tus bases de datos para que puedas
                                enviar campañas con listas de contactos reales y
                                actuales, generen beneficios a tu negocio.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price"
                                >A partir de 2.499 contactos</span
                              >
                              <h2>US$0,008*</h2>
                              <span class="dp-disclaimer"
                                >*Precio por contacto</span
                              >
                            </div>
                            <div class="col-sm-3"></div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Reportes Personalizados
                            <span class="dpicon iconapp-growth-chart"></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Obtén un informe customizado con las métricas
                                que precisas para medir tus Campañas. Profundiza
                                en los insights y optimiza tu estrategia.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price"
                                >Reporte mensual</span
                              >
                              <h2>US$50*</h2>
                              <span class="dp-disclaimer">*Por mes</span>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price"
                                >Reporte por única vez</span
                              >
                              <h2>US$150</h2>
                              <span class="dp-disclaimer"></span>
                            </div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Envío y automatización de SMS
                            <span
                              class="dpicon iconapp-mobile-messaging"
                            ></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p class="p-r-24">
                                Implementa SMS Marketing para llegar a tus
                                Contactos de forma inmediata y refuerza tu
                                estrategia de Marketing Automation.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price">Carga desde</span>
                              <h2>US$50*</h2>
                              <span class="dp-disclaimer">*Compra mínima</span>
                            </div>
                            <div class="col-sm-3"></div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Servicio de Maquetación
                            <span class="dpicon iconapp-source-file"></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Si el catálogo de templates no concuerda con tus
                                necesidades, te ayudamos a crear plantillas
                                especificas para tu negocio.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price">Desde</span>
                              <h2>US$80*</h2>
                              <span class="dp-disclaimer"
                                >*Por pieza en editor</span
                              >
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price">Desde</span>
                              <h2>US$200</h2>
                              <span class="dp-disclaimer"
                                >*Por pieza en Html</span
                              >
                            </div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Entorno Dedicado
                            <span
                              class="dpicon iconapp-computer-setting"
                            ></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Accede a un entorno dedicado y una IP exclusiva,
                                configurados para tu dominio. Te garantizará una
                                buena reputación y capacidad de entrega.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price">Accede por</span>
                              <h2>US$150*</h2>
                              <span class="dp-disclaimer">*Por mes</span>
                            </div>
                            <div class="col-sm-3"></div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            IP Dedicada
                            <span class="dpicon iconapp-dataserver"></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Obtén una IP dedicada, exclusivamente para tus
                                envíos. Seteada bajo minuciosos estándares de
                                seguridad, para una óptima entregabilidad.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price">Accede por</span>
                              <h2>US$30*</h2>
                              <span class="dp-disclaimer">*Por mes</span>
                            </div>
                            <div class="col-sm-3"></div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Envíos Transaccionales
                            <span class="dpicon iconapp-mail-info"></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Dispara Emails o SMS ante interacciones de los
                                usuarios con tu Sitio Web, aplicación o sistema
                                y para comunicar información sensible a
                                clientes.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price"
                                >Plan 50.000 Emails</span
                              >
                              <h2>US$26,50*</h2>
                              <span class="dp-disclaimer">*Por mes</span>
                            </div>
                            <div class="col-sm-3"></div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Pack de Landing Pages
                            <span class="dpicon iconapp-landing-page"></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Utiliza páginas de destino para captar a tus
                                clientes en múltiples dispositivos y guíalos a
                                la conversión.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price">Packs desde</span>
                              <h2>US$10*</h2>
                              <span class="dp-disclaimer">*Por mes</span>
                            </div>
                            <div class="col-sm-3"></div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Conversaciones
                            <span class="dpicon iconapp-chatting"></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Lorem ipsum dolor sit amet consectetur. Ac
                                eleifend diam lobortis montes eget proin purus.
                                Faucibus viverra suspendisse molestie viverra.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price">Planes desde</span>
                              <h2>US$30*</h2>
                              <span class="dp-disclaimer">*Por mes</span>
                            </div>
                            <div class="col-sm-3"></div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-12">
                    <div class="dp-box-shadow">
                      <div class="dp-card-grey">
                        <h4>ASESORIA Y ACOMPAÑAMIENTO ESTRATEICO</h4>
                        <h2>
                          Te ayudaremos a alcanzar los objetivos en tus campañas
                        </h2>
                        <p>
                          Revisaremos juntos cada aspecto de tu estrategia
                          actual y te ayudaremos a diseñar el plan de acción
                          ideal para alcanzar tus objetivos.
                        </p>
                        <button
                          type="button"
                          class="dp-button button-medium primary-green dp-w-100"
                        >
                          Solicitar consultoría
                        </button>
                      </div>
                    </div>
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
                    <div class="dp-box-shadow">
                      <div class="dp-card-grey">
                        <h4>ASESORIA Y ACOMPAÑAMIENTO ESTRATEICO</h4>
                        <h2>
                          Te ayudaremos a alcanzar los objetivos en tus campañas
                        </h2>
                        <p>
                          Revisaremos juntos cada aspecto de tu estrategia
                          actual y te ayudaremos a diseñar el plan de acción
                          ideal para alcanzar tus objetivos.
                        </p>
                        <button
                          type="button"
                          class="dp-button button-medium primary-green dp-w-100"
                        >
                          Solicitar consultoría
                        </button>
                      </div>
                    </div>
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
                    <div class="dp-box-shadow">
                      <div class="dp-card-grey">
                        <h4>ASESORIA Y ACOMPAÑAMIENTO ESTRATEICO</h4>
                        <h2>
                          Te ayudaremos a alcanzar los objetivos en tus campañas
                        </h2>
                        <p>
                          Revisaremos juntos cada aspecto de tu estrategia
                          actual y te ayudaremos a diseñar el plan de acción
                          ideal para alcanzar tus objetivos.
                        </p>
                        <button
                          type="button"
                          class="dp-button button-medium primary-green dp-w-100"
                        >
                          Solicitar consultoría
                        </button>
                      </div>
                    </div>
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
