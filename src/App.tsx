import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./styles/global";
import Routes from "./routes";
import GlobalContext from "./contexts/GlobalContext";

function App() {
  return (
    <GlobalContext>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </GlobalContext>
  );
}

export default App;
