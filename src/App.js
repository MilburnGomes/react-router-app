import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const [login, setLogin] = useState(false);
  return (
    // basename="tutorial"
    <BrowserRouter>
      <div className="App">
        <Header />

        <button onClick={() => setLogin(!login)}>
          {login ? 'logout' : 'login'}
        </button>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/profile">
            {/*{login ? <Profile /> : <Redirect to="/" />} */}
            <Profile login={login} />
          </Route>
          <Route path="/post/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
