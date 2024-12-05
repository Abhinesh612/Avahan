import React from 'react';
import './Domain.css';
import { coresList } from './cores_data';
// import {executivesList} from './heads_data'
 import { executivesList } from './executives_data.js';

import { Line } from './Line';
function Domain({ name1, name2, name3 }) {
  const CoresByDomain = executivesList.reduce((acc, core) => {
    const { Domain } = core;
    acc[Domain] = acc[Domain] || [];
    acc[Domain].push(core);
    return acc;
  }, {});

  return (
    <div className="executives_data">
      {Object.entries(CoresByDomain).map(([domain, executives]) => (
        <div key={domain} className="child_data">
          <h3>{domain}</h3>
          <Line/>
          <ul style={{ listStyleType: "none", padding:"0"   }}>
            {executives.map(({ Name }) => (
              // <li key={Name} style={{color: "peach",background: "#621C39", padding: "1rem 2rem", margin:"1rem 2rem" , border: " solid transparent 3px" , boxShadow:"0 0 10px #621C39" , borderRadius: "10px"}} >{Name} </li>
              <li key={Name}>{Name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Domain;




