import "./App.css";
import { Provider } from "react-redux";
import Sys from "../src/components/sys";
import Store from "./Store/Store";
import List from '../src/components/TodoList';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    
      <Router>
      <div class="App" >
        <Header/>
        
        <Switch>
        <Route exact path='/dropdown' component={Sys} />
        <Route exact path='/todo' component={List} />
        </Switch>
        
      </div>
      </Router>
    
  );
}

export default App;
