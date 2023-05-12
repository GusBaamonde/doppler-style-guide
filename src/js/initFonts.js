export function initFonts() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  // Font Proxima Nova
  link.href = "https://use.typekit.net/fbq8dbp.css";
  const target =
    document.getElementsByTagName("head")[0] ||
    document.getElementsByTagName("body")[0];
  target.appendChild(link);
}
