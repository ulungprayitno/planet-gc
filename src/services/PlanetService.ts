import api from '../utils/api';
import IResponse from '../types/Response';

const getAll = (params?: string) => {
  const url = params ? params : ''
  return api.get<IResponse>(`/planets/${url}`);
};

const PlanetService = {
  getAll
};

export default PlanetService;