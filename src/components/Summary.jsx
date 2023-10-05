import React, { useState } from 'react';
import blackPlus from '../assets/blackPlus.svg';
import whitePlus from '../assets/whitePlus.svg';
import { useSelector } from 'react-redux';

const Summary = () => {
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [educationVisible, setEducationVisible] = useState(false);
  const [furtherVisible, setFurtherVisible] = useState(false);

  const { nightMode } = useSelector((state) => state.filter);

  const experienceHandler = () => {
    setExperienceVisible(!experienceVisible);
  };

  const educationHandler = () => {
    setEducationVisible(!educationVisible);
  };

  const furtherHandler = () => {
    setFurtherVisible(!furtherVisible);
  };

  return (
    <div className="content-block">
      <div className="main-info">
        <img src="./selfie.jpeg" alt="photo" className="mainPhoto" />
        <div className="text">
          <p>Привет! Меня зовут Алексей и я frontend-разработчик</p>
          <h3>Используемые технологии</h3>
          <div className="text_info">
            <div className="first_column">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS/SASS</li>
              </ul>
            </div>
            <div className="second_column">
              <ul>
                <li>TypeScript</li>
                <li>Redux Toolkit</li>
                <li>React</li>
              </ul>
            </div>
            <div className="third_column">
              <ul>
                <li>React hooks</li>
                <li>React router</li>
                <li>Rest API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="more">
        <div className="experience">
          <div className="header">
            <h3>Опыт работы</h3>
            <img
              src={nightMode ? whitePlus : blackPlus}
              alt="plus"
              onClick={experienceHandler}
              className={experienceVisible ? 'exp' : ''}
            />
          </div>
          <p className={experienceVisible ? 'experienceVisible' : ''}>
            ООО Соло - 3 месяца. 1 месяц как project-manager, остальные 2 как frontend-разработчик
          </p>
        </div>
        <div className="education">
          <div className="header">
            <h3>Образование</h3>
            <img
              src={nightMode ? whitePlus : blackPlus}
              alt="plus"
              onClick={educationHandler}
              className={educationVisible ? 'ed' : ''}
            />
          </div>
          <p className={educationVisible ? 'educationVisible' : ''}>
            2019-2023 бакалавриат в Национальном исследовательском Томском политехническом
            университете. Направление - инноватика 2023-2025 вечерняя магистратура в ТПУ.
            Направление - цифровая аналитика
          </p>
        </div>
        <div className="further_info">
          <div className="header">
            <h3>Дополнительно</h3>
            <img
              src={nightMode ? whitePlus : blackPlus}
              alt="plus"
              onClick={furtherHandler}
              className={furtherVisible ? 'fu' : ''}
            />
          </div>
          <p className={furtherVisible ? 'furtherVisible' : ''}>
            В 2023 году на протяжении 3 месяцев участвовал в программе “стартап как диплом”, о чем
            имеется соответствующий сертификат государственного образца.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
