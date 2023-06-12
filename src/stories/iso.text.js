import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const isoText = ({}) => {
  return html`
    <div style="width: 100%; margin-top: 45px; padding-left: 60px;">
      <div class="dp-wrap-isologo--small dp--italic">
        <p>
          Tienes dudas?
          <a href="#" class="dp--text-underline"
            >Aprende mas sobre Automation.</a
          >
        </p>
      </div>
      <div class="dp-wrap-isologo--small m-t-30">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio
          nisi nihil dignissimos, dolore ipsa reprehenderit velit. Suscipit id
          nemo magni eligendi quam, aspernatur quaerat delectus, provident illum
          pariatur cum.
        </p>
      </div>
    </div>
  `;
};
