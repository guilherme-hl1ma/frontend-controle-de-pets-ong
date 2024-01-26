import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global.jsx";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";

import { createBrowserHistory } from "history";
import Rotas from "./routes/index.jsx";

function App() {
  const history = createBrowserHistory();

  return (
    <>
      <BrowserRouter history={history}>
        <Header />
        <Rotas />
        <GlobalStyle />
        <ToastContainer autoClose={3000} className="toast-container" />
      </BrowserRouter>
    </>
  );
}

export default App;
