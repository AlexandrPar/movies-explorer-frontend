import React from 'react';
import './App.css';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="page">
      <NotFound />
      <Main />
    </div>
  );
}

export default App;
