export default function(locale) {
  localStorage.setItem("locale", locale);
  window.location.reload();
}
