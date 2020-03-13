import React from 'react';
import { Header } from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import { ItemList } from '../ItemList/ItemList';
import { PersonDetails } from '../PersonDetails/PersonDetails';

export const App = () => {
  return(
    <div>
      <Header />

      <RandomPlanet />

      <div className="container">
        <div className="d-flex flex-row justify-content-between">
          <ItemList />
          <PersonDetails />
        </div>
      </div>
      
    </div>
  );
}