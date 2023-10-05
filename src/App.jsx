import Header from './components/Header';
import Summary from './components/Summary';
import ProjectBlock from './components/projectBlock';
import Sign from './components/Sign';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProjects } from './redux/slices/projects';
import { Loader } from './components/UI/Loader';

function App() {
  const dispatch = useDispatch();
  const { summary, nightMode } = useSelector((state) => state.filter);
  const { projects } = useSelector((state) => state.projects);

  useEffect(() => {
    if (nightMode) {
      document.body.style.backgroundColor = '#242121';
    }
    if (!nightMode) {
      document.body.style.backgroundColor = '#fafafa';
    }
  }, [nightMode]);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  const allProjects = projects.length ? (
    projects.map((obj) => <ProjectBlock key={obj.id} {...obj} />)
  ) : (
    <Loader />
  );
  console.log('РЕРЕНДЕР');

  return (
    <div className={nightMode ? 'nightMode' : ''}>
      <Header />
      {summary ? (
        <Summary />
      ) : (
        <>
          <Sign />
          {allProjects}
        </>
      )}
    </div>
  );
}

export default App;
