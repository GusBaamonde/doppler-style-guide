import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Carousel = ({}) => {
  return html`
    <div style="width: 100%; margin-top: 45px; padding-left: 60px;">
      <div class="dp-container">
        <div class="dp-rowflex">
          <div class="col-sm-12 col-md-6">
            <div class="dp-carousel" id="carousel1">
              <div class="dp-carousel-wrapper dp-carousel-orange">
                <div class="dp-carousel-content">
                  <div class="dp-carousel-slide active" data-order="first">
                    <h3>Último BlogPost</h3>
                    <p>
                      ¿Cuáles son las diferencias entre servicio al cliente y
                      atención al cliente?
                    </p>
                    <a><span class="ms-icon icon-arrow-next"></span>Ver más</a>
                  </div>
                  <div class="dp-carousel-slide" data-order="second">
                    <h3>Servicios Adicionales</h3>
                    <p>
                      Asesorías, acompañamiento exclusivo, IPs dedicadas o
                      funcionalidades extra.
                    </p>
                    <a><span class="ms-icon icon-arrow-next"></span>Ver más</a>
                  </div>
                </div>
              </div>
              <div class="dp-carousel-dots">
                <input
                  class="dp-carousel-dot"
                  checked=""
                  type="radio"
                  value="first"
                  id="first"
                  name="carousel1"
                />
                <input
                  class="dp-carousel-dot"
                  type="radio"
                  value="second"
                  id="second"
                  name="carousel1"
                />
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="dp-carousel" id="carousel2">
              <div class="dp-carousel-wrapper dp-carousel-purple">
                <div class="dp-carousel-content">
                  <div class="dp-carousel-slide active" data-order="first">
                    <h3>Último BlogPost</h3>
                    <p>
                      ¿Cuáles son las diferencias entre servicio al cliente y
                      atención al cliente?
                    </p>
                    <a><span class="ms-icon icon-arrow-next"></span>Ver más</a>
                  </div>
                  <div class="dp-carousel-slide" data-order="second">
                    <h3>Servicios Adicionales</h3>
                    <p>
                      Asesorías, acompañamiento exclusivo, IPs dedicadas o
                      funcionalidades extra.
                    </p>
                    <a><span class="ms-icon icon-arrow-next"></span>Ver más</a>
                  </div>
                  <div class="dp-carousel-slide" data-order="third">
                    <h3>Último BlogPost</h3>
                    <p>
                      ¿Cuáles son las diferencias entre servicio al cliente y
                      atención al cliente?
                    </p>
                    <a><span class="ms-icon icon-arrow-next"></span>Ver más</a>
                  </div>
                </div>
              </div>
              <div class="dp-carousel-dots">
                <input
                  class="dp-carousel-dot"
                  checked=""
                  type="radio"
                  value="first"
                  id="first"
                  name="carousel2"
                />
                <input
                  class="dp-carousel-dot"
                  type="radio"
                  value="second"
                  id="second"
                  name="carousel2"
                />
                <input
                  class="dp-carousel-dot"
                  type="radio"
                  value="third"
                  id="third"
                  name="carousel2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
