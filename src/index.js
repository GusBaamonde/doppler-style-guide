import "./index.scss";
import { initDopplerUI } from "./js";

if (window["style-guide-configuration"]?.autoInitialize) {
  initDopplerUI();
}
