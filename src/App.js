import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import AllMeetupsPage from "./pages/AllMeatUp";
import Favorites from "./pages/Favorites";
import NewMeetups from "./pages/NewMeetups";
import MainNavigation from "./Components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/newmeetups">
          <NewMeetups />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
