import { Navigate } from "react-router-dom";

import { APP_ROUTE } from "../../../constants/common";
import { DEFAULT_GUEST } from "../../../constants/guests";

const defaultURL = APP_ROUTE.invite.replace(":guest", DEFAULT_GUEST.hash);

const RedirectFromBaseRoute = () => <Navigate replace to={defaultURL} />;

export default RedirectFromBaseRoute;
