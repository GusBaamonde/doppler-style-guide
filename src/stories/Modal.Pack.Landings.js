import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const isoText = ({}) => {
  return html`
    <div class="dp-modal-pack-landing">
      <div class="dp-carousel" id="carousel2">
        <div class="dp-carousel-wrapper">
          <div class="dp-carousel-content">
            <div class="dp-carousel-slide active" data-order="first"></div>
            <div class="dp-carousel-slide" data-order="second"></div>
            <div class="dp-carousel-slide" data-order="third"></div>
          </div>
        </div>
        <!-- <div class="dp-carousel-dots">
      <input class="dp-carousel-dot" checked="" type="radio" value="first" id="first" name="carousel2">
      <input class="dp-carousel-dot" type="radio" value="second" id="second" name="carousel2">
      <input class="dp-carousel-dot" type="radio" value="third" id="third" name="carousel2">
    </div> -->
      </div>

      <h3>Adquiere un Pack de Landigs</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur. Ac eleifend diam lobortis
        montes.
      </p>
      <button type="button" class="dp-button button-medium primary-green">
        Crear una campaña
      </button>
      <a href="#">No quiero este beneficio</a>
    </div>
  `;
};
