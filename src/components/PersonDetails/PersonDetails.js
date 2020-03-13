import React from 'react';

import './PersonDetails.css';

export const PersonDetails = () => {
  return(
    <div className="card mb-3 card__person">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="..." className="card-img" alt="..." />
        </div>
      </div>

      <div className="col-md-8">
        <div className="card-body">
          <h2>Planet Name</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
          </ul>
        </div>
      </div>
    </div>
  );
}