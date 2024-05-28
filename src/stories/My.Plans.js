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
