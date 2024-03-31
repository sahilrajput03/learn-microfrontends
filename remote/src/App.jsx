import { render } from "solid-js/web";

import Counter from "./Counter";

import "./index.scss";

// port:3000

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <Counter />
  </div>
);

render(App, document.getElementById("app"));
