import React, { useState } from 'react';
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


function App() {
  const User = { name: 'Виталий', email: 'pochta@yandex.ru', password: '123' }

  const [newUser, setNewUser] = useState(User);

  const history = useHistory();


  function updateUser(evt) {
    evt.preventDefault();
    const name = evt.target.name.value;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    setNewUser({
      ...newUser,
      name: name, email: email, password: password
    });
    history.push('/profile');
  }

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
            <Profile
              updateUser={updateUser}
              userName={newUser.name}
              email={newUser.email} />
          </Route>
          <Route path="/signup">
            <Register
              updateUser={updateUser} />
          </Route>
          <Route path="/signin">
            <Login />
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
