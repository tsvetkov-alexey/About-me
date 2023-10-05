import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProjectInfo } from '../redux/slices/filter';
import AdditionalBlock from './AdditionalBlock';

const ProjectBlock = ({ id, imageUrl, title, url }) => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);
  const { projectInfo } = useSelector((state) => state.filter);

  console.log(projectInfo);

  const infoBlock = projects.length
    ? projects.map((obj) => <AdditionalBlock key={obj.id} {...obj} />)
    : '';

  const hadleButtonClick = useMemo(() => {
    return () => {
      dispatch(setProjectInfo(id));
    };
  }, [dispatch, id]);

  return (
    <>
      <div className="project-block">
        <h3>{title}</h3>
        <img src={imageUrl} alt="photo" className="mainPhoto" />
        <div className="buttons">
          <div className="attend">
            <a href={url} target="_blank">
              <span className="attendBtn">Посетить сайт</span>
              <img src="./arrow.png" alt="arrow" />
            </a>
          </div>
          <span className="about" onClick={hadleButtonClick}>
            О технологиях
          </span>
          {infoBlock}
        </div>
      </div>
    </>
  );
};

export default ProjectBlock;
