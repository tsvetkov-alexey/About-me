import React, { useState } from 'react';
import MyModal from './UI/MyModal';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts, setNightMode, setSummary } from '../redux/slices/filter';
import Contacts from './Contacts';

const Header = () => {
  const dispatch = useDispatch();
  const { summary, nightMode } = useSelector((state) => state.filter);

  const handleNightMode = () => {
    dispatch(setNightMode(!nightMode));
  };

  const handleNav = () => {
    dispatch(setSummary(!summary));
  };

  return (
    <>
      <header>
        <div className="nightMode">
          <div className="main-block" onClick={handleNightMode}>
            <img src={sun} alt="sun" />
            <div className={`circle circle__${nightMode ? 'moon' : 'sun'}`}></div>
            <img src={moon} alt="moon" />
          </div>
        </div>
        <div className="toggler" onClick={handleNav}>
          <div className={`ellipse ${summary ? 'ellipse__summary' : 'ellipse__works'}`}></div>
          <h2 className="summary">Резюме</h2>
          <h2 className="works">Работы</h2>
        </div>
        <div className="contacts">
          <span onClick={() => dispatch(setContacts(true))}>Контакты</span>
        </div>
      </header>
      <Contacts />
    </>
  );
};

export default Header;
