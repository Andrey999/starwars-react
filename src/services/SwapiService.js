export default class SwapiService {

  _apiBase = `https://swapi.co/api`; // приватная часть класса

  async getResourceApi(url) {
    const response = await fetch(`${this._apiBase}${url}`)
    if(!response.ok) {
      throw new Error(`Not fetch ${url}`)
    }
  
    return await response.json();
  }

  async getAllPeople() {
    const res = await this.getResourceApi(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResourceApi(`/people/${id}`)
  }

  async getAllPlanets() {
    const res = await this.getResourceApi(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResourceApi(`/planets/${id}`)
  }

  async getAllStarships() {
    const res = await this.getResourceApi(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResourceApi(`/starships/${id}`)  
  }
}

// const swapi = new SwapiService();
// swapi.getAllStarships()
//   .then((data) => console.log(data))