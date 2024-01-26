import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
:root{
    --toastify-icon-color-success: white;
    --toastify-icon-color-error: white;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: "Nunito", sans-serif;
  }

  body {
    background-color: #CFF2F4;
    color: #000;
  }

  html, body, #root {
    height: 100vh;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: #00cc00;
    color: white;
  }

  .Toastify__progress-bar--success {
    background: white;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: #cc0000;
    color: white;
  }

  .Toastify__progress-bar--error {
    background: white;
  }
`;
