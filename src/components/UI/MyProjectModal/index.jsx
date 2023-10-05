import React from 'react';
import st from './myProjectModal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setProjectInfo } from '../../../redux/slices/filter';

const index = ({ children }) => {
  const { projectInfo } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const rootClasses = [st.myModal];
  if (projectInfo) {
    rootClasses.push(st.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => dispatch(setProjectInfo(false))}>
      <div className={st.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default index;
