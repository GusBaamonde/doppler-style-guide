import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Chat = ({}) => {
  return html`
    <h2>Steper Icons</h2>
    <hr />
    <section class="dp-container m-t-36">
      <div class="dp-container-steper">
        <ul class="dp-steper">
          <li class="active">
            <span
              ><span class="dpicon iconapp-email-alert"></span>Plan
              marketing</span
            >
          </li>
          <li class="active">
            <span
              ><span class="dpicon iconapp-chatting"></span>Plan
              conversaciones</span
            >
          </li>
          <li class="active">
            <span
              ><span class="dpicon iconapp-fast-money"></span>Finaliza tu
              compra</span
            >
          </li>
          <li>
            <span
              ><span class="dpicon iconapp-launch"></span>Disfruta Doppler</span
            >
          </li>
        </ul>
      </div>
    </section>
    <h2>Steper Counter</h2>
    <hr />
    <section class="dp-container m-t-18">
      <div class="dp-container-steper">
        <ul class="dp-steper-counter">
          <li class="active"><span>Plan marketing</span></li>
          <li class="active"><span>Plan conversaciones</span></li>
          <li class="active"><span>Finaliza tu compra</span></li>
          <li><span>Disfruta Doppler</span></li>
          <li><span>Otro item</span></li>
          <li><span>Otro item</span></li>
        </ul>
      </div>
    </section>
    <h2>Steper - Animation - state and place</h2>
    <hr />
    <section class="dp-container m-t-36">
      <div class="dp-container-steper">
        <ul class="dp-steper">
          <li class="active">
            <span
              ><span class="dpicon iconapp-email-alert"></span>Plan
              marketing</span
            >
          </li>
          <li class="active">
            <span
              ><span class="dpicon iconapp-chatting"></span>Plan
              conversaciones</span
            >
          </li>
          <li class="active">
            <span class="step-active"></span
            ><span
              ><span class="dpicon iconapp-fast-money"></span>Finaliza tu
              compra</span
            >
          </li>
          <li>
            <span
              ><span class="dpicon iconapp-launch"></span>Disfruta Doppler</span
            >
          </li>
        </ul>
      </div>
    </section>
  `;
};
