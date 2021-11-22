import { useContext, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/GlobalContext/authContext";

import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

const Routes = () => {
  const { user } = useContext(AuthContext);
  const [authState, setAuthState] = useState<boolean>();

  useEffect(() => {
    const currentAuthState =
      localStorage.getItem("_isAuthenticated") === "true" ? true : false;
    setAuthState(currentAuthState);
  }, [user]);

  return (
    <Switch>
      <Route
        path="/auth"
        exact
        render={() => (authState ? <Redirect to="/app" /> : <Auth />)}
      />
      <Route
        path="/app"
        exact
        render={() => (authState ? <Dashboard /> : <Redirect to="/auth" />)}
      />
      <Redirect to="/auth" />
    </Switch>
  );
};

export default Routes;
