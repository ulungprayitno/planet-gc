import IPlanet from "./Planets";

export default interface IResponse {
  count?: number,
  next?: string,
  previous?: string,
  results: Array<IPlanet>
}