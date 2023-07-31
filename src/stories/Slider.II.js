import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({}) => {
  return html`
    <div class="button-description">
      <p class="m-b-18">
        <strong>Slider de proceso de compra</strong>
      </p>
    </div>
    <div class="dp-purchase-process--slider progress-bar" style="width: 650px">
      <ul class="datalist" id="item-list">
        <li>500</li>
        <li>1.500</li>
        <li>2.500</li>
        <li>5.000</li>
        <li>10.000</li>
        <li>15.000</li>
        <li>25.000</li>
        <li>50.000</li>
        <li>100.000</li>
      </ul>
      <input
        class="range-slider"
        type="range"
        min="0"
        value="0"
        max="8"
        step="1"
        data-value="0"
        list="item-list"
      />
      <div class="progress-anchor" style="width: 30%"></div>
    </div>
  `;
};
