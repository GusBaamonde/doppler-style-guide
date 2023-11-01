import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const isoText = ({}) => {
  return html`
    <div style="width: 100%; margin-top: 45px; padding-left: 60px;">
      <div class="dp-container m-t-42">
        <div class="dp-rowflex">
          <div class="col-md-4 m-b-12">
            <h4 class="m-b-24">Success message</h4>
            <div class="dp-wrap-message dp-wrap-success">
              <span class="dp-message-icon"></span>
              <div class="dp-content-message">
                <p>Cambios guardados con éxito.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 m-b-12">
            <h4 class="m-b-24">Warning MEssage</h4>
            <div class="dp-wrap-message dp-wrap-warning">
              <span class="dp-message-icon"></span>
              <div class="dp-content-message">
                <p>Ten cuidado.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 m-b-12">
            <h4 class="m-b-24">Error Message</h4>
            <div class="dp-wrap-message dp-wrap-cancel">
              <span class="dp-message-icon"></span>
              <div class="dp-content-message">
                <p>¡Ouch! Ha habido un problema.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 m-t-42 m-b-12">
            <h4 class="m-b-24">INFORMATION message</h4>
            <div class="dp-wrap-message dp-wrap-info">
              <span class="dp-message-icon"></span>
              <div class="dp-content-message">
                <p>Cambios guardados con éxito.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 m-t-42 m-b-12"></div>
          <div class="col-md-4 m-t-42 m-b-12"></div>
          <div class="col-md-4 m-b-12">
            <h4 class="m-t-24 m-b-24">Success message - EDITORS - WITH LINK</h4>
            <div class="dp-wrap-message dp-wrap-success">
              <span class="dp-message-icon"></span>
              <div class="dp-content-message">
                <p>
                  Utilizar dominios públicos como Hotmail, Gmail, Yahoo u otros,
                  afecta la Tasa de Apertura. Si tienes dudas, presiona Help.
                </p>
                <a href="#" class="dp-message-link">Entendido</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 m-b-12">
            <h4 class="m-t-24 m-b-24">Warning MEssage - EDITORS - WITH LINK</h4>
            <div class="dp-wrap-message dp-wrap-warning">
              <span class="dp-message-icon"></span>
              <div class="dp-content-message">
                <p>
                  Utilizar dominios públicos como Hotmail, Gmail, Yahoo u otros,
                  afecta la Tasa de Apertura. Si tienes dudas, presiona Help.
                </p>
                <a href="#" class="dp-message-link">Entendido</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 m-b-12">
            <h4 class="m-t-24 m-b-24">Error Message - EDITORS - WITH LINK</h4>
            <div class="dp-wrap-message dp-wrap-cancel">
              <span class="dp-message-icon"></span>
              <div class="dp-content-message">
                <p>
                  ¡Ouch! Debido a la cantidad de Suscriptores, debes configurar
                  un dominio propio para hacer este envío. Si tienes dudas,
                  presiona Help.
                </p>
                <a href="#" class="dp-message-link">Configura tu dominio</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 m-b-12">
            <h4 class="m-t-24 m-b-24">Success message - EDITORS - WITH LINK</h4>
            <div class="dp-wrap-message dp-wrap-info">
              <span class="dp-message-icon"></span>
              <div class="dp-content-message">
                <p>
                  Utilizar dominios públicos como Hotmail, Gmail, Yahoo u otros,
                  afecta la Tasa de Apertura. Si tienes dudas, presiona Help.
                </p>
                <a href="#" class="dp-message-link">Entendido</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 m-b-12"></div>
          <div class="col-md-4 m-b-12"></div>
          <div class="col-md-12 m-b-12 m-t-42">
            <h4 class="m-t-24 m-b-24">
              Success message - FULL WIDTH - WITH LINK
            </h4>
            <div class="dp-wrap-message dp-wrap-success">
              <span class="dp-message-icon"></span>
              <div class="dp-content-message dp-content-full">
                <p>
                  Utilizar dominios públicos como Hotmail, Gmail, Yahoo u otros,
                  afecta la Tasa de Apertura. Si tienes dudas, presiona Help.
                </p>
                <a href="#" class="dp-message-link">Entendido</a>
              </div>
            </div>
          </div>
          <div class="col-md-12 m-b-12">
            <h4 class="m-t-24 m-b-24">Warning MEssage - FULL WIDTH</h4>
            <div class="dp-wrap-message dp-wrap-warning">
              <span class="dp-message-icon"></span>
              <div class="dp-content-message dp-content-full">
                <p>
                  Utilizar dominios públicos como Hotmail, Gmail, Yahoo u otros,
                  afecta la Tasa de Apertura. Si tienes dudas, presiona Help.
                </p>
                <a href="#" class="dp-message-link">Entendido</a>
              </div>
            </div>
          </div>
          <div class="col-md-12 m-b-12">
            <h4 class="m-t-24 m-b-24">Error Message - FULL WIDTH</h4>
            <div class="dp-wrap-message dp-wrap-cancel">
              <span class="dp-message-icon"></span>
              <div class="dp-content-message dp-content-full">
                <p>
                  ¡Ouch! Debido a la cantidad de Suscriptores, debes configurar
                  un dominio propio para hacer este envío. Si tienes dudas,
                  presiona Help.
                </p>
                <a href="#" class="dp-message-link">Configura tu dominio</a>
              </div>
            </div>
          </div>
          <div class="col-md-12 m-b-12">
            <h4 class="m-t-24 m-b-24">
              Success message - FULL WIDTH - WITH LINK
            </h4>
            <div class="dp-wrap-message dp-wrap-info">
              <span class="dp-message-icon"></span>
              <div class="dp-content-message dp-content-full">
                <p>
                  Has configurado correctamente tu dominio. Para mas
                  información, presiona Help.
                </p>
                <a href="#" class="dp-message-link">Configura tu dominio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
