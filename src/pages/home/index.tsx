import React from 'react';
import IPlanet from '../../types/Planets';
import PlanetService from '../../services/PlanetService';
import ListPlanets from '../../components/list-planet';
import styled from "styled-components";

const Loading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center
`;

const HomePage: React.FC = () => {
  const [planets, setPlanets] = React.useState<Array<IPlanet>>([]);
  const [isNext, setIsNext] = React.useState<string | undefined>('');

  React.useEffect(() => {
    retrievePlanets();
  }, [])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNext]);

  const retrievePlanets = (params?: string) => {
    let result = [...planets];
    PlanetService.getAll(params)
      .then((response) => {
        result = [...result, ...response.data.results]
        setPlanets(result);
        setIsNext(response.data.next)
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  function handleScroll() {
    if (isNext !== null) {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      const url = isNext?.split("=")[1]
      const params = `?page=${url}`
      retrievePlanets(params)
    }
  }

  return <div style={{marginTop: '76px'}}>
    {planets ? (
      <ListPlanets data={planets} />
    ) : <Loading>....Loading</Loading>}
  </div>;
};

export default HomePage;