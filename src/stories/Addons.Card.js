import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({}) => {
  return html`
    <div class="dp-wrapper-addons m-t-42" style="width: 396px">
      <h2>
        Descubre nuestros add-ons
        <span class="dpicon iconapp-add-product"></span>
      </h2>
      <article class="dp-card-addons">
        <h3>
          <span class="dpicon iconapp-landing-page"></span> Packs de Landigs
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ac eleifend diam lobortis
          montes eget proin purus. Faucibus viverra suspendisse molestie
          viverra.
        </p>
        <span class="dp-pricing-addons">
          <span>Packs desde </span>
          US$50*
        </span>
        <footer>
          <ul>
            <li><a href="#">Mas información</a></li>
            <li>
              <button type="button" class="dp-button button-medium ctaTertiary">
                Comprar ahora
              </button>
            </li>
          </ul>
        </footer>
      </article>
      <article class="dp-card-addons">
        <h3>
          <span class="dpicon iconapp-mobile-messaging"></span> Crédito en SMS
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ac eleifend diam lobortis
          montes eget proin purus. Faucibus viverra suspendisse molestie
          viverra.
        </p>
        <span class="dp-pricing-addons">
          <span>Packs desde </span>
          US$50*
        </span>
        <footer>
          <ul>
            <li><a href="#">Mas información</a></li>
            <li>
              <button type="button" class="dp-button button-medium ctaTertiary">
                Comprar ahora
              </button>
            </li>
          </ul>
        </footer>
      </article>
    </div>
  `;
};
