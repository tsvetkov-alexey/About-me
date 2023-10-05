import React from 'react';
import MyProjectModal from './UI/MyProjectModal';
import { useSelector } from 'react-redux';

const AdditionalBlock = ({
  id,
  desc,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  tech7,
  tech8,
  toCorrect,
}) => {
  const { projectInfo } = useSelector((state) => state.filter);
  if (projectInfo !== id) {
    return null;
  }
  return (
    <MyProjectModal>
      <div id="moreInfo">
        <h3>О проекте</h3>
        <p>{desc}</p>
        <h3>Об использованных технологиях</h3>
        <ul>
          <li>{tech1}</li>
          <li>{tech2}</li>
          <li>{tech3}</li>
          <li>{tech4}</li>
          <li>{tech5}</li>
          <li>{tech6}</li>
          <li>{tech7}</li>
          <li>{tech8}</li>
        </ul>
        <h3>Скорректировать</h3>
        <p>{toCorrect}</p>
      </div>
    </MyProjectModal>
  );
};

export default AdditionalBlock;
