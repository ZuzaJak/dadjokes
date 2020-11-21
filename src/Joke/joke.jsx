/* ÚKOL 15: Vytvořte komponentu Joke, která zobrazuje jeden vtip. Tato komponenta bude sídlit ve vlastní složce se všemi potřebnými CSS styly a obrázky. Komponenta Joke nechť má pět props: userId, userName, text, likes, dislikes.
V hlavním souboru projektu importujte pole objektů ze souboru jokes.js. Zobrazte každý vtip z pole pomocí komponenty Joke.
Výsledná aplikace by měla zobrazovat seznam všech vtipů se správnými uživateli a počty likeů. Tlačítka u každého vtipu by měla fungovat tak, že mění počty likeů uvnitř každé jednotlivé komponenty. */
import React, { useState } from 'react';
import '../style.css';
import asset from '../assets/img/user01.png';

const Joke = () => {
  const [upLikes, setUpLikes] = useState(0);
  const [downLikes, setDownLikes] = useState(0);

  const Like = () => {
    setUpLikes(upLikes + 1);
  };
  const Dislike = () => {
    setDownLikes(downLikes + 1);
  };
  return (
    <>
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={asset} />
            <p className="user-name">Neroxx</p>
          </div>
          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={Like}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {upLikes}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={Dislike}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {downLikes}
          </span>
        </div>
      </div>
    </>
  );
};

export default Joke;
