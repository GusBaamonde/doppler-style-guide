import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Animations = ({}) => {
  return html`<div class="dp-library">
    <div class="dp-container">
      <div class="dp-rowflex">
        <nav class="tabs-wrapper">
          <ul class="tabs-nav" data-tab-active="1">
            <li class="tab--item">
              <a href="#" class="tab--link active"
                >Comportamiento histórico del suscriptor</a
              >
            </li>
            <li class="tab--item">
              <a href="#" class="tab--link">Historial de permisos GDPR</a>
            </li>
            <!-- Ejemplo de estructura de tab
                  <li class="tab--item">
                  <a href="#" class="tab--link">Un tercer tab de contenido</a>
                </li>
              -->
          </ul>
          <!-- nav -->
          <div class="tabs-bg"></div>
        </nav>
        <section class="tab--container col-sm-12 dp-box-shadow">
          <article class="tab--content active p-t-30">
            <header class="dp-header-campaing dp-rowflex m-b-18">
              <div class="col-lg-6 col-md-12">
                <div class="dp-calification">
                  <span class="dp-useremail-campaign"
                    ><strong>fcoronel@makingsense.com</strong></span
                  >
                  <span
                    class="ms-icon icon-star"
                    aria-label="Una estrella"
                  ></span>
                  <span
                    class="ms-icon icon-star-filled"
                    aria-label="Sin estrella"
                  ></span>
                  <span
                    class="ms-icon icon-star-filled"
                    aria-label="Sin estrella"
                  ></span>
                </div>
                <span class="dp-username-campaing">Federico Coronel</span>
                <span class="dp-subscriber-icon">
                  <span
                    class="ms-icon icon-user user--removed-client"
                    title="Removido por el suscriptor"
                    aria-label="Removido por el suscriptor"
                  ></span>
                  Removido por el suscriptor</span
                >
                <ul class="dp-rowflex col-sm-12 dp-subscriber-info">
                  <li class="col-sm-12 col-md-4 col-lg-3">
                    <span class="dp-block-info">Fecha de Remoción:</span
                    ><span>22/12/2016</span>
                  </li>
                  <li class="col-sm-12 col-md-4 col-lg-3">
                    <span class="dp-block-info">IP origen de Remoción:</span
                    ><span>200.5.229.58</span>
                  </li>
                  <li class="col-sm-12 col-md-4 col-lg-5">
                    <span class="dp-block-info"
                      >Campaña origen de Remoción:</span
                    ><a href="#">Campaña Estacional de Primavera</a>
                  </li>
                </ul>
              </div>

              <div class="dp-rowflex col-lg-6 col-md-12">
                <div class="col-sm-6 col-md-3 col-lg-3 m-b-24">
                  <div class="dp-rate-wrapper">
                    <div class="dp-rate-chart">
                      <svg
                        viewBox="0 0 36 36"
                        class="dp-circular-chart dp-stroke-violet"
                      >
                        <path
                          class="dp-circle-bg"
                          d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831"
                        ></path>
                        <path
                          class="dp-circle"
                          stroke-dasharray="57, 100"
                          d="M18 2.0845
                                      a 15.9155 15.9155 0 0 1 0 31.831
                                      a 15.9155 15.9155 0 0 1 0 -31.831"
                        ></path>
                        <text
                          x="18"
                          y="15"
                          class="dp-text-percentage fadeInDown"
                        >
                          open rate
                        </text>
                        <text x="17" y="23" class="dp-percentage fadeInUp">
                          57%
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-3 m-b-24">
                  <ul class="dp-kpi-campaign">
                    <li>
                      <span class="dp-number-campaign dp-color-green"
                        >85.0</span
                      >
                    </li>
                    <li>
                      <span class="dp-kpi-legend">93 Entregados</span>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-3 m-b-24">
                  <ul class="dp-kpi-campaign">
                    <li>
                      <span class="dp-number-campaign dp-color-red">15.0</span>
                    </li>
                    <li>
                      <span class="dp-kpi-legend">12 No Entregados</span>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-6 col-md-3 col-lg-3 m-b-24">
                  <ul class="dp-kpi-campaign">
                    <li>
                      <span class="dp-number-campaign dp-kpi-grey">37.0</span>
                    </li>
                    <li>
                      <span class="dp-kpi-legend">Clicks totales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
            <div class="dp-table-responsive">
              <table
                class="dp-c-table"
                aria-label="Resultado de historial de suscriptores"
                summary="Resultado de historial de suscriptores"
              >
                <thead>
                  <tr>
                    <th aria-label="Campaña" scope="col">
                      <a href="#">Campaña</a>
                    </th>
                    <th aria-label="Asunto" scope="col">
                      <a href="#">Asunto </a>
                    </th>
                    <th aria-label="Comportamiento" scope="col">
                      <a href="#">Comportamiento </a>
                    </th>
                    <th aria-label="Clicks únicos" scope="col">
                      <a href="#">Clicks únicos</a>
                    </th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <td colspan="4">
                      <nav class="dp-pagination">
                        <ul>
                          <li>
                            <a href="#" class="ms-icon icon-arrow-prev"></a>
                          </li>
                          <li><span class="dp-pag-point"></span></li>
                          <li><a href="#">1</a></li>
                          <li>
                            <span class="dp-active-page" aria-current="page"
                              >2</span
                            >
                          </li>
                          <li><a href="#">3</a></li>
                          <li><span class="dp-pag-point"></span></li>
                          <li>
                            <a href="#" class="ms-icon icon-arrow-next"></a>
                          </li>
                        </ul>
                      </nav>
                    </td>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td aria-label="Campaña">
                      <ul class="dp-campaign">
                        <li>
                          <div class="dp-tooltip-container">
                            <a href="#"
                              >Este es un link con el nombre de la campaña
                              <div class="dp-tooltip-block">
                                <img
                                  src="../../assets/img/9139873.gif"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <span class="dp-date"
                            >fecha de envío: 9/9/2019 5:00:24 PM</span
                          >
                        </li>
                      </ul>
                    </td>
                    <td aria-label="Asunto">
                      <span class="dp-affair"
                        >🍃 ¿Cómo sacarle provecho a la Primavera? 🌸</span
                      >
                    </td>
                    <td aria-label="Comportamiento">
                      <span class="status--opened">Open</span>
                    </td>
                    <td aria-label="Clicks únicos"><span>1</span></td>
                  </tr>
                  <tr>
                    <td>
                      <ul class="dp-campaign">
                        <li>
                          <div class="dp-tooltip-container">
                            <a href="#"
                              >Campaña Estacional de Primavera
                              <div class="dp-tooltip-block">
                                <img
                                  src="../../assets/img/9139873.gif"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                        </li>

                        <li>
                          <span class="dp-date"
                            >fecha de envío: 9/9/2019 5:00:24 PM</span
                          >
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span class="dp-affair"
                        >[News] El Calendario Estacional 2019 ya está aquí
                        📅</span
                      >
                    </td>
                    <td>
                      <span class="status--soft-bounced">Soft Bounced</span>
                    </td>
                    <td><span>2</span></td>
                  </tr>
                  <tr>
                    <td>
                      <ul class="dp-campaign">
                        <li>
                          <div class="dp-tooltip-container">
                            <a href="#"
                              >Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Sed eu imperdiet tellus. In
                              tristique lectus a pulvinar posuere. Ut cursus
                              elementum nulla, in ultricies massa accumsan at.
                              <div class="dp-tooltip-block">
                                <img
                                  src="../../assets/img/9139873.gif"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <span class="dp-date"
                            >fecha de envío: 9/9/2019 5:00:24 PM</span
                          >
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span class="dp-affair"
                        >¡Ya comienza el día 2! 🎥 Accede a las
                        conferencias</span
                      >
                    </td>
                    <td>
                      <span class="status--not-opened">Not Opened</span>
                    </td>
                    <td><span>5</span></td>
                  </tr>
                  <tr>
                    <td>
                      <ul class="dp-campaign">
                        <li>
                          <div class="dp-tooltip-container">
                            <a href="#"
                              >Campaña Estacional de Primavera
                              <div class="dp-tooltip-block">
                                <img
                                  src="../../assets/img/9139873.gif"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                        </li>

                        <li>
                          <span class="dp-date"
                            >fecha de envío: 9/9/2019 5:00:24 PM</span
                          >
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span class="dp-affair"
                        >[News] Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed eu imperdiet tellus. In tristique
                        lectus a pulvinar posuere. Ut cursus elementum nulla, in
                        ultricies massa accumsan at. 📅</span
                      >
                    </td>
                    <td><span class="status--opened">Open</span></td>
                    <td><span>15</span></td>
                  </tr>
                  <tr>
                    <td>
                      <ul class="dp-campaign">
                        <li>
                          <div class="dp-tooltip-container">
                            <a href="#"
                              >2903913_Campaña_Fechas_Patrias_Chile_
                              Uruguay_y_Mexico
                              <div class="dp-tooltip-block">
                                <img
                                  src="../../assets/img/9139873.gif"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <span class="dp-date"
                            >fecha de envío: 9/9/2019 5:00:24 PM</span
                          >
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span class="dp-affair"
                        >🍃 ¿Cómo sacarle provecho a la Primavera? 🌸</span
                      >
                    </td>
                    <td>
                      <span class="status--hard-bounced">Hard Bounced</span>
                    </td>
                    <td><span>-</span></td>
                  </tr>
                  <tr>
                    <td>
                      <ul class="dp-campaign">
                        <li>
                          <div class="dp-tooltip-container">
                            <a href="#"
                              >Campaña Estacional de Primavera
                              <div class="dp-tooltip-block">
                                <img
                                  src="../../assets/img/9139873.gif"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <span class="dp-date"
                            >fecha de envío: 9/9/2019 5:00:24 PM</span
                          >
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span class="dp-affair">
                        [News] Aprovecha estas fechas patrias para ponteciar tus
                        ventas 📅</span
                      >
                    </td>
                    <td>
                      <span class="status--hard-bounced">Hard Bounced</span>
                    </td>
                    <td><span>6</span></td>
                  </tr>
                  <tr>
                    <td>
                      <ul class="dp-campaign">
                        <li>
                          <div class="dp-tooltip-container">
                            <a href="#"
                              >Campaña Estacional de Primavera
                              <div class="dp-tooltip-block">
                                <img
                                  src="../../assets/img/9139873.gif"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <span class="dp-date"
                            >fecha de envío: 9/9/2019 5:00:24 PM</span
                          >
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span class="dp-affair"
                        >¡Ya comienza el día 2! 🎥 Accede a las
                        conferencias</span
                      >
                    </td>
                    <td>
                      <span class="status--soft-bounced">Soft Bounced</span>
                    </td>
                    <td><span>13</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article class="tab--content p-t-30">
            <header class="dp-header-campaing dp-rowflex m-b-18">
              <div class="col-lg-6 col-md-12">
                <div class="dp-calification">
                  <span class="dp-useremail-campaign"
                    ><strong>fcoronel@makingsense.com</strong></span
                  >
                  <span
                    class="ms-icon icon-star"
                    aria-label="Una estrella"
                  ></span>
                  <span
                    class="ms-icon icon-star-filled"
                    aria-label="Sin estrella"
                  ></span>
                  <span
                    class="ms-icon icon-star-filled"
                    aria-label="Sin estrella"
                  ></span>
                </div>
                <span class="dp-username-campaing">Federico Coronel</span>
                <span class="dp-subscriber-icon">
                  <span
                    class="ms-icon icon-user user--removed-client"
                    title="Removido por el suscriptor"
                    aria-label="Removido por el suscriptor"
                  ></span>
                  Removido por el suscriptor</span
                >
                <ul class="dp-rowflex col-sm-12 dp-subscriber-info">
                  <li class="col-sm-12 col-md-4 col-lg-3">
                    <span class="dp-block-info">Fecha de Remoción:</span
                    ><span>22/12/2016</span>
                  </li>
                </ul>
              </div>
            </header>
            <div class="dp-table-responsive">
              <table
                class="dp-c-table"
                aria-label="Resultado de historial de suscriptores"
                summary="Resultado de historial de suscriptores"
              >
                <thead>
                  <tr>
                    <th aria-label="Campaña" scope="col">
                      <a href="#">Nombre del campo</a>
                    </th>
                    <th aria-label="Asunto" scope="col">
                      <a href="#">Texto personalozado </a>
                    </th>
                    <th aria-label="Comportamiento" scope="col">
                      <a href="#">Valor actual</a>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <span>Acepto condiciones</span>
                    </td>
                    <td>
                      <span
                        >Haciendo click en el checkbox confirma y acepta
                        nuestras condiciones</span
                      >
                    </td>
                    <td>
                      <div class="dp-icon-wrapper">
                        <span class="ms-icon icon-lock dp-lock-green"></span>
                        <span>Aceptado</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>No acepto las condiciones</span>
                    </td>
                    <td>
                      <span>El usuario no esta interesado</span>
                    </td>
                    <td>
                      <div class="dp-icon-wrapper">
                        <span class="ms-icon icon-lock dp-lock-grey"></span>
                        <span>Sin respuesta</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Acepto condiciones</span>
                    </td>
                    <td>
                      <span
                        >Haciendo click en el checkbox confirma y acepta
                        nuestras condiciones</span
                      >
                    </td>
                    <td>
                      <div class="dp-icon-wrapper">
                        <span class="ms-icon icon-lock dp-lock-grey"></span>
                        <span>Sin respuesta</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Acepto condiciones</span>
                    </td>
                    <td>
                      <span
                        >Haciendo click en el checkbox confirma y acepta
                        nuestras condiciones</span
                      >
                    </td>
                    <td>
                      <div class="dp-icon-wrapper">
                        <span class="ms-icon icon-lock dp-lock-green"></span>
                        <span>Aceptado</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Acepto condiciones</span>
                    </td>
                    <td>
                      <span
                        >Haciendo click en el checkbox confirma y acepta
                        nuestras condiciones</span
                      >
                    </td>
                    <td>
                      <div class="dp-icon-wrapper">
                        <span class="ms-icon icon-lock dp-lock-green"></span>
                        <span>Aceptado</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>No acepto las condiciones</span>
                    </td>
                    <td>
                      <span>El usuario no esta interesado</span>
                    </td>
                    <td>
                      <div class="dp-icon-wrapper">
                        <span class="ms-icon icon-lock dp-lock-red"></span>
                        <span>Rechazado</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>No acepto las condiciones</span>
                    </td>
                    <td>
                      <span>El usuario no esta interesado</span>
                    </td>
                    <td>
                      <div class="dp-icon-wrapper">
                        <span class="ms-icon icon-lock dp-lock-red"></span>
                        <span>Rechazado</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <!-- Ejemplo de estructura de contenido de tab
                <article class="tab--content">
                <h2>Titulo tres</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse pellentesque congue justo in ullamcorper.
                  Phasellus efficitur id orci tincidunt maximus. Fusce eleifend
                  tellus a est maximus convallis. Duis turpis erat, consequat
                  sit amet dapibus vitae, gravida non lorem. Praesent vitae
                  elementum erat. Nunc condimentum lorem elit, eu posuere augue
                  euismod in. Cras lobortis velit libero, id sodales massa
                  lobortis a. Sed ligula orci, facilisis eget luctus ut,
                  consectetur non ante.
                </p>
              </article>-->
        </section>
      </div>
    </div>
  </div>`;
};
