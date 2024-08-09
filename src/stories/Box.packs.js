import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Box = ({}) => {
  return html`
    <div class="dp-library">
      <div class="dp-container">
        <h3 class="dp-second-order-title m-t-30 m-b-36">
          Elije tu pack de landings
        </h3>
        <div class="dp-rowflex">
          <div class="col-sm-12 col-lg-12">
            <form class="awa-form dp-packs">
              <h3>Packs de Landings</h3>
              <fieldset>
                <div class="dp-pack-box">
                  <p class="dp-mark">Pack de 5 landings</p>
                </div>
                <div class="dp-pack-box">
                  <h3>US$ 7,50*/mes</h3>
                  <p>Precio: US$2,00 c/u</p>
                </div>
                <div class="dp-pack-box">
                  <label
                    for="email"
                    class="labelcontrol"
                    aria-disabled="false"
                    data-required="false"
                  >
                    <button type="button">
                      <span class="dp-button-less">-</span>
                    </button>
                    <input
                      type="number"
                      placeholder="0"
                      aria-required="true"
                      aria-placeholder="0"
                      aria-invalid="false"
                    />
                    <button type="button">
                      <span class="dp-button-more">+</span>
                    </button>
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <div class="dp-pack-box">
                  <p class="dp-mark">Pack de 5 landings</p>
                </div>
                <div class="dp-pack-box">
                  <h3>US$ 7,50*/mes</h3>
                  <p>Precio: US$2,00 c/u</p>
                </div>
                <div class="dp-pack-box">
                  <label
                    for="email"
                    class="labelcontrol"
                    aria-disabled="true"
                    data-required="false"
                  >
                    <button type="button" disabled>
                      <span class="dp-button-less">-</span>
                    </button>
                    <input
                      type="number"
                      placeholder="0"
                      aria-required="true"
                      aria-placeholder="0"
                      aria-invalid="false"
                      disabled
                    />
                    <button type="button" disabled>
                      <span class="dp-button-more">+</span>
                    </button>
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <div class="dp-pack-box">
                  <p class="dp-mark">Pack de 5 landings</p>
                </div>
                <div class="dp-pack-box">
                  <h3>US$ 7,50*/mes</h3>
                  <p>Precio: US$2,00 c/u</p>
                </div>
                <div class="dp-pack-box">
                  <label
                    for="email"
                    class="labelcontrol"
                    aria-disabled="false"
                    data-required="true"
                  >
                    <button type="button">
                      <span class="dp-button-less">-</span>
                    </button>
                    <input
                      type="number"
                      placeholder="0"
                      aria-required="true"
                      aria-placeholder="0"
                      aria-invalid="true"
                    />
                    <button type="button">
                      <span class="dp-button-more">+</span>
                    </button>
                  </label>
                </div>
              </fieldset>
              <fieldset class="dp-buttons-packs">
                <button
                  type="button"
                  class="dp-button button-medium ctaTertiary"
                >
                  Remover de carrito
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
};
