import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import Layout from "./Components/layout/Layoutt";
import AllMeetupsPage from "./pages/AllMeatUp";
import Favorites from "./pages/Favorites";
import NewMeetups from "./pages/NewMeetups";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
