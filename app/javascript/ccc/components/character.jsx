import React from 'react';
import { Card } from 'semantic-ui-react';

// Components
const backgroundImage = (backgroundImage) => {
  return ({
      backgroundImage: `url('${backgroundImage}')`
  })
}

// const Property

// Render the character Attribute
// Did Not Create A React
const renderAttribute = (value, prop) => {
  return(
    <div className="fx-r-fs-c">
      <div className="ml-s fw-bold">
       {value}
      </div>
      <div className="ml-s">
        {prop}
      </div>
    </div>
  )
}

const Character = (props) => {
  return (
    <div className="character active swingimage">
      <div className="name fx-r-c-c fw-bold mt-xxs mb-xxs">{props.character.name}</div>
        <div className="thumbnail" style={backgroundImage(props.character.thumbnail)}></div>
          {renderAttribute("chat","chaton")}
        <div className="card-divider"> </div>
    </div>
  );
};
export default Character;
