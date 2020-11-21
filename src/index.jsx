import React from 'react';
import { render } from 'react-dom';
import Joke from './Joke/joke.jsx';
import './index.html';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Joke />
    </div>
  );
};

render(<App />, document.querySelector('#app'));

/* Naprogramujte vaši Reactovou aplikaci tak, aby dělala přesně totéž a vypadala přesně stejně, jako vzorová aplikace. Stačí vytvořit jednu komponentu App. Ze vzorové aplikace můžete vykrást libovolný kód, který se vám bude v Reactu hodit.
Jako odpověď na tuto otázku uveďte odkaz na váš GitHub repozitář. */
