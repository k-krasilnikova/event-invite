import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import { RedirectFromBaseRoute } from "./components/Routes";
import { APP_ROUTE } from "./constants/common";

const App = () => (
  <BrowserRouter basename={APP_ROUTE.browserBase}>
    <Routes>
      <Route index element={<RedirectFromBaseRoute />} />
      <Route path={APP_ROUTE.invite} element={<Landing />} />
      <Route path="*" element={<RedirectFromBaseRoute />} />
    </Routes>
  </BrowserRouter>
);

export default App;
