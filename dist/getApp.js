var appScript = document.createElement("script"); // create a script DOM node
appScript.type = "module";
appScript.crossOrigin = ""; // same as anonymous
appScript.src = "/assets/index.2b0c28b9.js"; // set its src to the provided URL
document.head.appendChild(appScript);

var libScript = document.createElement("link"); // create a script DOM node
libScript.rel = "modulepreload";
libScript.href = "/assets/vendor.86d874f6.js"; // set its src to the provided URL
document.head.appendChild(libScript);

var css = document.createElement("link"); // create a script DOM node
css.rel = "stylesheet";
css.href = "/assets/index.0673ce28.css"; // set its src to the provided URL
document.head.appendChild(css);