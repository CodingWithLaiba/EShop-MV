// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from "react-dom";
import App from './App.jsx'
import {Provider} from "react-redux"
import Store from "./redux/store.js"

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
