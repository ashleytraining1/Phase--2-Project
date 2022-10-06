import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import MenuPages from "./pages/MenuPages";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/about">
        <About />
        </Route>

        <Route exact path="/contact">
        <Contact />
        </Route>

        <Route exact path="/team">
        <Team />
        </Route>

        <Route exact path="/MenuPages">
        <MenuPages />
        </Route>

        <Route exact path="/">
          <Home />
          </Route>
        
      </Switch>
      <Footer />
      </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
