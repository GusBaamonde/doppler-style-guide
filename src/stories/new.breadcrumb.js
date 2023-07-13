import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({}) => {
  return html`
    <nav class="dp-bread-crumb m-t-42">
      <ul>
        <li>
          <a href="#" class="dp-bc--active">Inicio</a>
        </li>
        <li>
          <span class="dp-arrow dp-arrow--right"></span>
          <a href="#"> Configuración</a>
        </li>
        <li>
          <span class="dp-arrow dp-arrow--right"></span>
          <a href="#"> Panel de control</a>
        </li>
        <li>
          <span class="dp-arrow dp-arrow--right"></span>
          Integraciones y preferencias avanzadas
        </li>
      </ul>
    </nav>
  `;
};
