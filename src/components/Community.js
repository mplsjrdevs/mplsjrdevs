import React from 'react';
import jenessa from '../images/community/jenessa-white.jpg';
import chelsey from '../images/community/chelsey-mckinney.jpg';
import garret from '../images/community/garret-saarinen.jpg';
import matt from '../images/community/matt-decuir.jpg';

const Community = () => {
  return (
    <section id="community">
      <h2>Community</h2>
      <div className="flex-container">
        <div className="carousel">
          <img
            src={jenessa}
            alt="bio goes here eventually"
            className="responsive"
          />
        </div>
        <div className="community-images">
          <img
            src={chelsey}
            alt="Chelsey McKinney"
            className="community-image"
          />
          <img src={garret} alt="Garret Saarinen" className="community-image" />
          <img src={jenessa} alt="Jenessa White" className="community-image" />
          <img src={matt} alt="Matt Decuir" className="community-image" />
        </div>
      </div>
    </section>
  );
};

export default Community;
