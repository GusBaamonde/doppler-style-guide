import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Header = ({
  accountState,
  hasDopplerLogo,
  clientManagerContent,
  label,
}) => {
  let messages = null;
  let content = null;
  switch (accountState) {
    case "warning":
      messages = html`<div class="messages-container warning">
        <div class="wrapper">
          <p>
            Thanks! We’ll contact you ASAP and if everything is fine, you’ll be
            able to send your Campaign.
          </p>
          <a href="#" class="button button--light button--tiny">Upgrade Now</a>
        </div>
      </div>`;
      break;
    case "info":
      messages = html`<div class="messages-container info">
        <div class="wrapper">
          <p>
            Posees una cuenta gratis de 500 Suscriptores. Potencia tus Campañas
            con los beneficios de un Plan Pago.
          </p>
          <a href="#" class="button button--light button--tiny"
            >Comprar Ahora</a
          >
        </div>
      </div>`;
      break;
    case "blocker":
      messages = html`<div class="messages-container blocker">
        <div class="wrapper">
          <p>
            Para que puedas enviar tu próxima Campaña, antes necesitamos
            verificar el origen de tus Suscriptores.
          </p>
          <a href="#" class="button button--light button--tiny"
            >Verificar Ahora</a
          >
        </div>
      </div>`;
      break;
  }
  switch (clientManagerContent) {
    case "text":
      content = html`<span>YourCompanyName/Logo</span>`;
      break;
    case "image":
      content = html`<img src="https://via.placeholder.com/180x50" />`;
      break;
  }

  return html`
<section class="dp-container-fluid">
    <div class="dp-rowflex">
    ${messages}
    <header class="header-main header-open ${
      !hasDopplerLogo ? "dp-header--cm" : ""
    }">
        <div class="dp-logo--cm">
          ${content}
        </div>
        <div class="header-wrapper">
          <div class="logo" style="display:${
            hasDopplerLogo ? "block" : "none"
          }">
            <a href="#">
                <span class="ms-icon icon-doppler-logo"></span>
            <a/>
          </div>
          <nav class="nav-left-main">
            <div class="menu-main--container">
              <ul class="menu-main">
              <li><a href="#">Inicio</a></li>
                <li class="submenu-item">
                  <a href="#" class="active">Campañas</a>
                  <ul class="sub-menu sub-campaings open">
                    <li><a href="#" class="active">Borradores</a></li>
                    <li><a href="#">Programadas</a></li>
                    <li><a href="#">Enviadas</a></li>
                    <li><a href="#">Test A/B</a></li>
                  </ul>
                  <!-- sub-menu -->
                </li>
                <li class="submenu-item">
                  <a href="#">Listas</a>
                  <ul class="sub-menu sub-list">
                    <li><a href="#">Listas principales</a></li>
                    <li><a href="#">Segmentos</a></li>
                    <li><a href="#">Subscriptores</a></li>
                    <li><a href="#">Campos personalizados</a></li>
                    <li><a href="#">Formularios</a></li>
                  </ul>
                  <!-- sub-menu -->
                </li>
                <li><a href="#">Automatizaciones</a></li>
                <li><a href="#">Reportes</a></li>
                <li><a href="#">Plantillas</a></li>
                <li><a href="#">Integraciones</a></li>
              </ul>
            </div>
            <!-- menu-main--container only-mobile -->
          </nav>
          <!-- nav-left-main -->
          <nav class="nav-right-main">
            <ul class="nav-right-main--list">
              <li>
              <span class="user-menu--open active iconapp-notification" title="Notificaciones">
                Notification
              </span>
                <div class="user-menu helper--right dp-notifications">
                  <div class="dp-msj-notif" dp-dynamic-html="notification">
                    <strong>NUEVO: Comportamiento en Sitio</strong>
                    <br />
                    <p>
                      Programa un flujo automatizado de Emails que se envíe de
                      acuerdo a las páginas que los Suscriptores hayan
                      visitado en tu sitio.<br />
                      <a href="#"><strong>PRUÉBALO GRATIS</strong></a> por
                      tiempo limitado.
                    </p>
                  </div>
                </div>
              </li>
              <li>
              <a rel="noreferrer" class="dp-link-help" title="Ayuda">Ayuda</a>
              </li>
              <li>
              <span class="dp-avatar-user user-menu--open" title="Nombre de Usuario">${label}</span>
                <div class="user-menu">
                  <!--open-->
                  <header>
                    <span class="user-avatar--menu">GB</span>
                    <p>
                      <span class="name">Gus Baamonde</span
                      ><span class="email">gbaamonde@makingsense.com</span>
                    </p>
                  </header>
                  <div class="user-plan--container m-t-18">
                    <div class="user-plan--type">
                      <p class="user-plan--monthly-text">
                        <strong>Cuenta Gratis</strong> (500 Suscriptores)
                      </p>
                      <button
                        class="user-plan close-user--menu"
                        type="button"
                      >
                        comprar
                      </button>
                    </div>
                    <div class="user-plan--type">
                      <p><strong>498</strong> Suscriptores disponibles</p>
                      <div class="dp-request-sent">
                        <button
                          class="user-plan close-user--menu dp-tooltip-left"
                          type="button"
                        >
                          solicitud enviada
                          <div class="tooltiptext">
                            Estamos diseñando un Plan a la medida de tus
                            necesidades.¡Te contactaremos pronto!
                          </div>
                        </button>
                        <span class="ms-icon icon-info-icon"></span>
                        <div class="dp-tooltip-container"></div>
                      </div>
                    </div>
                    <div class="user-plan--type">
                      <p><strong>250</strong> Suscriptores disponibles</p>
                    </div>
                  </div>
                  <!-- user-plan--container -->
                  <ul class="options-user">
                    <li><a href="">Panel de Control</a></li>
                    <li><a href="">Centro de descargas</a></li>
                    <li><a href="">Primeros pasos en Doppler</a></li>
                    <li><a href="">Salir</a></li>
                  </ul>
                </div>
                <!-- user-menu -->
              </li>
            </ul>
            <a id="open-menu" class="ms-icon icon-menu desktop-hd-hidden"></a>
            <a
              id="close-menu"
              class="ms-icon icon-close desktop-hd-hidden"
            ></a>
          </nav>
          <!-- nav-right-main -->
        </div>
        <!-- header-wrapper -->
      </header>
    </div>
  </section>

  `;
};
