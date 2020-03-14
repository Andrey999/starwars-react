import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService';

 class RandomPlanet extends Component {
  constructor() {
    super();
    this.updatePlanet();
  }

  state = {
    planet: {}
  }

 
  SwapiService = new SwapiService();         

  updatePlanet() {
    const id = Math.floor(Math.random() * 24) + 2;
    this.SwapiService.getPlanet(id)
    .then( (planet) => { 
      this.setState({
        planet
      })
    })
  }

   render() {
    const { planet: { imageId, planetName, population, rotationPeriod, diameter } } = this.state;

    return(
      <div className="container">
        <div className="card mb-3 random__planet flex-row">
          <div className="row no-gutters flex-row">
              <div className="col">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${imageId}.jpg`} className="card-img" />
              </div>
          </div>
  
        <div className="col-md-8">
          <div className="card-body">
            <h2>{planetName}</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Population: <span>{population}</span></li>
              <li className="list-group-item">Rotation Period: <span>{rotationPeriod}</span></li>
              <li className="list-group-item">Diameter: <span>{diameter}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
   }
}
export default RandomPlanet;