import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { queryClient } from "./api/base";
import Landing from "./pages/Landing";
import { RedirectFromBaseRoute } from "./components/Routes";
import { APP_ROUTE } from "./constants/common";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename={APP_ROUTE.browserBase}>
      <Routes>
        <Route index element={<RedirectFromBaseRoute />} />
        <Route path={APP_ROUTE.invite} element={<Landing />} />
        <Route path="*" element={<RedirectFromBaseRoute />} />
      </Routes>
    </BrowserRouter>{" "}
  </QueryClientProvider>
);

//firebase deploy --only hosting:event-invite-110cf

export default App;
