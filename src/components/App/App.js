import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import * as auth from '../../utils/MainApi';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [showPreloader, setShowPreloader] = useState(false);

  function handleRegister({ name, email, password }) {
    return auth
      .signup(name, email, password)
      .then((res) => {
        if (res) {
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(`Ошибка регистрации: ${err}`);
      });
  };

  function handleLogin({ email, password }) {
    auth
      .signin(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          tokenCheck();
        }
      })
      .catch((err) => {
        console.log(`Ошибка авторизации: ${err}`);
        console.log(email, password);
      });
  };

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setCurrentUser(res)
            setEmail(res.email);
            setLoggedIn(true);
            history.push('/');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const signOut = () => {
    setLoggedIn(false);
    setEmail('');
    setCurrentUser('');
    localStorage.removeItem('token');
    history.push("/login");
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      history.push("/main");
    }
  }, [loggedIn, history]);

  return (
    <div className="page">
      <Header />
      <main className="page__main">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <Register
              handleRegister={handleRegister}
              showPreloader={showPreloader} />
          </Route>
          <Route path="/signin">
            <Login
              onLogin={handleLogin}
              showPreloader={showPreloader} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
