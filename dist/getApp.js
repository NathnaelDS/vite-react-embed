if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  var entryPoint = document.createElement("div");
  entryPoint.id = "root";
  document.getElementsByClassName("section")[0].after(entryPoint);

  var appScript = document.createElement("script"); // create a script DOM node
  appScript.type = "module";
  appScript.crossOrigin = ""; // same as anonymous
  appScript.src = "https://tinyembed.onrender.com/assets/index.2b0c28b9.js"; // set its src to the provided URL
  document.head.appendChild(appScript);

  var libScript = document.createElement("link"); // create a script DOM node
  libScript.rel = "modulepreload";
  libScript.href = "https://tinyembed.onrender.com/assets/vendor.86d874f6.js"; // set its src to the provided URL
  document.head.appendChild(libScript);

  var css = document.createElement("link"); // create a script DOM node
  css.rel = "stylesheet";
  css.href = "https://tinyembed.onrender.com/assets/index.0673ce28.css"; // set its src to the provided URL
  document.head.appendChild(css);
}
