import React from 'react';
import smoothscroll from 'smoothscroll';
import banner from 'fight.jpg'

// Components
import CharacterList from '../containers/character_list';
import CreateCharacter from '../containers/create-character';

// Helping Functions
const bannerStyle = (backgroundImage) => {
  return ({
      backgroundImage: `linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url('${backgroundImage}')`
  })
}

// Scroll to the Character Session
const onPLayClick = () => {
  const destination = document.querySelector('.character-section');
  smoothscroll(destination, 1300)
}

// Components
const App = (props) => {
  return (
    <div >
      <div className="banner fx-c-sa-c" style={bannerStyle(banner)}>
        <div className="banner-content">
          <h1>Captain Contrat Fight</h1>
          <p>made with <i className="em em-heart"></i> by Doudou </p>
        </div>
        <a className="btn btn-primary btn-lg"
            onClick={onPLayClick}>
            Play now</a>
      </div>
      <div className="character-section h-100vh pt-m">
        <h2 className="fx-r-sa-sa fs-l ff-fight-font">
          Who gonna fight  ?
        </h2>
        <CharacterList />
        <div className="mt-l fx-r-sa-sa">
          <CreateCharacter />
        </div>
      </div>
    </div>
  );
};
// selectedChannel={props.match.params.channel}

export default App;
