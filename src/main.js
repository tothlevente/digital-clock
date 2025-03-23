import { setupClock } from "./scripts/clock.js";

import "./css/style.css";

document.querySelector("#app").innerHTML = `<div id="clock"></div>`;

setupClock(document.querySelector("#clock"));
