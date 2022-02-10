import $ from "jquery";
/* Example jquery dependency */
export const getJqueryVersion = () =>
  console.log("jQuery version", $.fn.jquery);
