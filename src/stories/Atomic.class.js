import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Atomic = ({}) => {
  return html`
    <article class="dpsg-content">
      <h3>Atomic Class</h3>
      <p>
        Tenemos una serie de clases atómicas para poder utilizar sobre cualquier
        elemento que deseemos afectar.
      </p>
      <p>
        Las clases comienzan con una sigla que identifica lo que queremos
        afectar <strong>(p = padding / m = margin)</strong>.
      </p>
      <p>
        La segunda sigla seguida de un guion es la posición
        <strong>(t = top, b=bottom, l=left, r=right)</strong>
      </p>
      <p>
        Los espaciados que se utilizan en la libreria saltan de 6px en 6px
        <strong>(desde 0px a 174px)</strong>
      </p>
      <hr class="dpsg-break" />
      <p><strong>m-t-30</strong> = margin-top: 30px;</p>
      <p><strong>m-l-36</strong> = margin-left: 36px;</p>
      <p><strong>p-t-30</strong> = padding-top: 30px;</p>
      <p><strong>p-b-30</strong> = padding-bottom: 30px;</p>
    </article>
  `;
};
