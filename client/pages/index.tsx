import { Route, Switch } from "react-router-dom";
import Shop from './shop';

const App: React.FC = () => {
  return(
      <Switch>
        <Route path="/" exact component={Shop} />
      </Switch>
  );
}

export default App;


