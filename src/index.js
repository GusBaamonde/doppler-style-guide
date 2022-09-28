import "./index.scss";
import {
  initDopplerMenuBehavior,
  initUserMenuBehavior,
  initAccordionBehavior,
  initModalsBehavior,
  initDemonstrateBehavior,
  initTabsBehavior,
  initDopplerPlusBehavior,
  initSliderBehavior,
  initNestedTableBehavior,
  initTipsBehavior,
  initCarouselBehavior,
  initDropdownButtonBehavior,
  initExitEditorButtonBehavior,
} from "./js";

if (window["style-guide-configuration"]?.autoInitialize) {
  window["style-guide-configuration"].initDopplerMenuBehavior = true;
  window["style-guide-configuration"].initUserMenuBehavior = true;
  window["style-guide-configuration"].initAccordionBehavior = true;
  window["style-guide-configuration"].initModalsBehavior = true;
  window["style-guide-configuration"].initDemonstrateBehavior = true;
  window["style-guide-configuration"].initTabsBehavior = true;
  window["style-guide-configuration"].initDopplerPlusBehavior = true;
  window["style-guide-configuration"].initSliderBehavior = true;
  window["style-guide-configuration"].initNestedTableBehavior = true;
  window["style-guide-configuration"].initTipsBehavior = true;
  window["style-guide-configuration"].initCarouselBehavior = true;
  window["style-guide-configuration"].initDropdownButtonBehavior = true;
  window["style-guide-configuration"].initExitEditorButtonBehavior = true;
}

if (window["style-guide-configuration"]?.initDopplerMenuBehavior) {
  initDopplerMenuBehavior();
}
if (window["style-guide-configuration"]?.initUserMenuBehavior) {
  initUserMenuBehavior();
}
if (window["style-guide-configuration"]?.initAccordionBehavior) {
  initAccordionBehavior();
}
if (window["style-guide-configuration"]?.initModalsBehavior) {
  initModalsBehavior();
}
if (window["style-guide-configuration"]?.initDemonstrateBehavior) {
  initDemonstrateBehavior();
}
if (window["style-guide-configuration"]?.initTabsBehavior) {
  initTabsBehavior();
}
if (window["style-guide-configuration"]?.initDopplerPlusBehavior) {
  initDopplerPlusBehavior();
}
if (window["style-guide-configuration"]?.initSliderBehavior) {
  initSliderBehavior();
}
if (window["style-guide-configuration"]?.initNestedTableBehavior) {
  initNestedTableBehavior();
}
if (window["style-guide-configuration"]?.initTipsBehavior) {
  initTipsBehavior();
}
if (window["style-guide-configuration"]?.initCarouselBehavior) {
  initCarouselBehavior();
}
if (window["style-guide-configuration"]?.initDropdownButtonBehavior) {
  initDropdownButtonBehavior();
}
if (window["style-guide-configuration"]?.initExitEditorButtonBehavior) {
  initExitEditorButtonBehavior();
}
