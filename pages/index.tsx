import { Route, Switch } from "react-router-dom";
import Shop from './shop';

function App() {
  return(
      <Switch>
        <Route path="/" exact component={Shop} />
      </Switch>
  );
}

export default App;


