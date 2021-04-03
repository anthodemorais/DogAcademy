import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Post from './pages/Post'
import Header from "./components/Header";
import SubscribeBtn from './components/SubscribeBtn'
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SubscribeBtn />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/post/:slug">
            <Post />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
