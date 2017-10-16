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
    <div className="fx-r-sb-sa">
      <div className="ml-s fw-bold">
       {value}
      </div>
      <div className="mr-xxl">
        {prop}
      </div>
    </div>
  )
}

const Character = (props) => {
  return (
    <div className="character">
      <div className="name fx-r-c-c fw-bold mt-xxs mb-xxs">{props.character.name}</div>
        <div className="thumbnail" style={backgroundImage(props.character.thumbnail)}></div>
          {renderAttribute("Life point",props.character.totalLifePoint)}
          {renderAttribute("Attack point",props.character.attackPoint)}
          {renderAttribute("Expé point",props.character.expPoint)}
        <div className="mb-s"> </div>
    </div>
  );
};
export default Character;
