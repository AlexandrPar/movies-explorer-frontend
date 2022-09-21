import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import './App.css';
import ProtectedRoute from '../../utils/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import * as auth from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import success from "../../images/okImg.svg";
import fail from "../../images/failsImg.svg";



function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const [tooltipStatus, setTooltipStatus] = useState({ url: "", title: "" });
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);
  const history = useHistory();

  function handleRegister(name, email, password) {
    setShowPreloader(true);
    return auth
      .signup(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password)
          history.push("/movies");
          setIsInfoTooltipOpen(true);
          setTooltipStatus({
            url: success,
            title: "Вы успешно зарегистрировались!",
          });
        }
      })
      .catch((err) => {
        console.log(`Ошибка регистрации: ${err}`);
        setIsInfoTooltipOpen(true);
        setTooltipStatus({
          url: fail,
          title: `Ошибка регистрации: ${err}`,
        });
        setShowPreloader(false)
      })
      .finally(() => { setShowPreloader(false); })
  };

  function handleLogin(email, password) {
    setShowPreloader(true);
    auth
      .signin(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          setLoggedIn(true);
          tokenCheck();
          setDataInfo();
          history.push("/movies");
        }
      })
      .catch((err) => {
        console.log(`Ошибка авторизации: ${err}`);
        setIsInfoTooltipOpen(true);
        setTooltipStatus({
          url: fail,
          title: `Ошибка авторизации: ${err}`,
        });
      })
      .finally(() => { setShowPreloader(false); })
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
            history.push('/movies');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  function handleUpdateUser(name, email) {
    const token = localStorage.getItem('token');
    auth.setUserInfo(token, name, email)
      .then((res) => {
        setCurrentUser({ name: res.name, email: res.email, id: res._id })
        setIsInfoTooltipOpen(true);
        setTooltipStatus({
          url: success,
          title: `Данные успешно обновлены!`,
        });
      })
      .catch((err) => {
        console.log(`Ошибка обновления данных: ${err}`);
        setIsInfoTooltipOpen(true);
        setTooltipStatus({
          url: fail,
          title: `Ошибка обновления данных: ${err}`,
        });
      });
  }

  const signOut = () => {
    setLoggedIn(false);
    setEmail('');
    setCurrentUser('');
    localStorage.removeItem('token');
    localStorage.removeItem('savedFilteredMovies');
    localStorage.removeItem('savedInputSearch');
    localStorage.removeItem('savedShort');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('beatFilmMovies');
    localStorage.removeItem('beatFilmInputSearch');
    localStorage.removeItem('beatFilmFilteredMovies');
    localStorage.removeItem('beatFilmShort');
  };

  function setDataInfo() {
    const token = localStorage.getItem('token');
    auth
      .checkToken(token)
      .then((res) => {
        console.log(res);
        setCurrentUser({ name: res.name, email: res.email, id: res._id })
      })
      .catch((err) => {
        console.log(`Ошибка загрузки данных: ${err}`);
      });
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          if (res) {
            setCurrentUser({ name: res.name, email: res.email, id: res._id })
          }
        })
        .catch((err) => {
          console.log(`Ошибка проверки токена: ${err}`);
          setLoggedIn(false);
        });
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      if (localStorage.getItem('savedMovies')) {
        setSavedMovies((JSON.parse(localStorage.getItem('savedMovies'))));
      } else {
        getSavedMovies();
      }
    }
  }, [loggedIn]);

  function updateSavedMovies(savedMovies) {
    setSavedMovies(savedMovies);
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }

  function getSavedMovies() {
    setShowPreloader(true);
    const token = localStorage.getItem('token');
    auth.getMovies(token)
      .then(data => {
        updateSavedMovies(data);
      })
      .catch(err => {
        console.log(`Ошибка загрузки данных: ${err}`);
      })
      .finally(() => setShowPreloader(false));
  }

  function onMovieSave(movie) {
    const isSaved = savedMovies?.some(i => i.movieId === movie.id);
    const token = localStorage.getItem('token');
    if (!isSaved) {
      auth
        .postMovie(movie, token)
        .then((newMovie) => {
          updateSavedMovies([newMovie, ...savedMovies])
          setIsInfoTooltipOpen(true);
          setTooltipStatus({
            url: success,
            title: 'Фильм успешно добавлен в избранное.',
          });
        })
        .catch((err) => {
          console.log(`Ошибка загрузки данных: ${err}`);
          setIsInfoTooltipOpen(true);
          setTooltipStatus({
            url: fail,
            title: `Ошибка загрузки данных: ${err}`,
          });
        });
    } else {
      const id = savedMovies.find(item => item.movieId === movie.id)._id;
      auth
        .deleteMovie(id, token)
        .then(() => {
          updateSavedMovies(savedMovies.filter(movie => movie._id === id ? null : movie));
          setIsInfoTooltipOpen(true);
          setTooltipStatus({
            url: success,
            title: 'Фильм успешно удален из избранного.',
          });
        })
        .catch((err) => {
          console.log(`Ошибка удаления данных: ${err}`);
          setIsInfoTooltipOpen(true);
          setTooltipStatus({
            url: fail,
            title: `Ошибка удаления данных: ${err}`,
          });
        })
    }
  }

  function onMovieDel(movie) {
    const token = localStorage.getItem('token');
    const id = movie._id;
    auth
      .deleteMovie(id, token)
      .then(() => {
        updateSavedMovies(savedMovies.filter(movie => movie._id === id ? null : movie));
        setIsInfoTooltipOpen(true);
        setTooltipStatus({
          url: success,
          title: 'Фильм успешно удален из избранного.',
        });
      })
      .catch((err) => {
        console.log(`Ошибка удаления данных: ${err}`);
        setIsInfoTooltipOpen(true);
        setTooltipStatus({
          url: fail,
          title: `Ошибка удаления данных: ${err}`,
        });
      })
  }

  function handleInfoTooltip() {
    setIsInfoTooltipOpen(!isInfoTooltipOpen)
  }

  function closePopups() {
    setIsInfoTooltipOpen(false)
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedIn={loggedIn} />
        <main className="page__main">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>

            <ProtectedRoute path="/movies"
              component={Movies}
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              onMovieSave={onMovieSave}
            />

            <ProtectedRoute path="/saved-movies"
              component={SavedMovies}
              loggedIn={loggedIn}
              movies={savedMovies}
              getMovies={getSavedMovies}
              onMovieDel={onMovieDel}
              showPreloader={showPreloader}
            />

            <ProtectedRoute path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              handleUpdateUser={handleUpdateUser}
              onClick={signOut}
            />
            <Route path="/signup">
              <Register
                loggedIn={loggedIn}
                handleRegister={handleRegister}
                showPreloader={showPreloader}
              />
            </Route>
            <Route path="/signin">
              <Login
                loggedIn={loggedIn}
                onLogin={handleLogin}
                showPreloader={showPreloader}
              />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
        <Footer />
        <InfoTooltip
          onClose={closePopups}
          data={tooltipStatus}
          isOpen={isInfoTooltipOpen}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
