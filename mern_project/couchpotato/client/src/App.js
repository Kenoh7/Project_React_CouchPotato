import './App.css';
import Home from './components/Home';
import Results from './components/Results';
import View from './components/View';
import Create from './components/Create';
import Favorite from './components/Favorite';
import {Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/favorite">
          <Favorite/>
        </Route>
        <Route path="/view/:id">
          <View/>
        </Route>
        <Route path="/results/:food">
          <Results/>
        </Route>
        <Route path="/">
          <Redirect to="/home"/>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
