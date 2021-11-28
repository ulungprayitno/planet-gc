import api from '../utils/api';
import IResponse from '../types/Response';
import IPlanet from '../types/Planets';

const getAll = (params?: string) => {
  const url = params ? params : ''
  return api.get<IResponse>(`/planets/${url}`);
};

const getById = (id: string) => {
  return api.get<IPlanet>(`/planets/${id}`);
};

const PlanetService = {
  getAll,
  getById
};

export default PlanetService;