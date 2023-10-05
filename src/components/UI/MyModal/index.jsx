import React from 'react';
import st from './myModal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from '../../../redux/slices/filter';

const index = ({ children }) => {
  const { contacts } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const rootClasses = [st.myModal];
  if (contacts) {
    rootClasses.push(st.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => dispatch(setContacts(false))}>
      <div className={st.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default index;
