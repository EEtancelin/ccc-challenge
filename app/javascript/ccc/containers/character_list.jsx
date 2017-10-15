import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/* It's saturnday it's sunny I'm feeling in a geek mood.
And got the idea for a Nano Package.

This abstraction should be enhance as the prop Character is Hard-Coded

Nano Helperto replace :
  {this.props.characters.map( character => {
    return (
      <Character character={character} />
  )})}
By:
  {this.props.characters.map(toComponent(Character))}

Using The Following function
*/

const toComponent = (Component) => {
  return(
      (item) => <Component character={item} />
  )
}


// Components
import Character from '../components/character';

class CharacterList extends React.Component {
  render () {
    return (
      <div className='fx-r-sa-c pt-l'>
        {this.props.characters.map(toComponent(Character))}
      </div>
    );
  }
}

// Component connection
function mapStateToProps(state) {
  return {
    characters: state.characters,
  };
}

export default connect(mapStateToProps, null)(CharacterList);
