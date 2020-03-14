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
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResourceApi(`/people/${id}`)
    return this._transformPerson(person)
  }

  async getAllPlanets() {
    const res = await this.getResourceApi(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResourceApi(`/planets/${id}`)
    return this._transformPlanet(planet)
  }

  async getAllStarships() {
    const res = await this.getResourceApi(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResourceApi(`/starships/${id}`)  
    return this._transformStarship(starship)
  }

  _transformPlanet(planet) {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = planet.url.match(idRegExp)[1];
    return {
      imageId: id,     
      planetName: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }  

  _transformStarship(starship) {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = starship.url.match(idRegExp)[1];
    return {
      imageId: id,     
      starhipName: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transformPerson(person) {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = person.url.match(idRegExp)[1];
    return {
      imageId: id,     
      personName: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }
}

const swapi = new SwapiService();
swapi.getAllPlanets().then((planet) => console.log(planet))