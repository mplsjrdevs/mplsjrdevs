import React from 'react';
import jenessa from '../images/community/jenessa-white.jpg';
import chelsey from '../images/community/chelsey-mckinney.jpg';
import garret from '../images/community/garret-saarinen.jpg';
import matt from '../images/community/matt-decuir.jpg';
import sarah from '../images/community/sarah-cooke.jpg';
import kam from '../images/community/kam-kubesh.jpg';
import brandon from '../images/community/brandon-johnson.jpg';
import ian from '../images/community/ian-coldwater.jpg';

const Community = () => {
  let communityMembers = [
    {
      name: 'Jenessa White',
      image: '../images/community/jenessa-white.jpg',
      bio:
        "Hi I'm Jenessa. I'm a Software Engineer at Software For Good in Minneapolis, MN.",
      links: [
        {
          title: 'GitHub',
          url: 'https://github.com/jenessawhite',
          icon: 'fa-github'
        },
        {
          title: 'LinkedIn',
          url: 'https://www.linkedin.com/in/jenessawhite/',
          icon: 'fa-linkedin-square'
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/JNessView',
          icon: 'fa-twitter'
        }
      ]
    },
    {
      name: 'Matt Decuir',
      image: '../images/community/matt-decuir.jpg',
      bio: "Hi I'm Matt. I'm a Software Engineer at Granicus in St. Paul, MN.",
      links: [
        {
          title: 'GitHub',
          url: 'https://github.com/experimatt',
          icon: 'fa-github'
        },
        {
          title: 'LinkedIn',
          url: 'https://www.linkedin.com/in/mattdecuir/',
          icon: 'fa-linkedin-square'
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/experimatt',
          icon: 'fa-twitter'
        }
      ]
    }
  ];

  return (
    <section id="community">
      <h2>Community</h2>
      <div className="flex-container">
        <div className="carousel">
          <img
            src={jenessa}
            alt="bio goes here eventually"
            className="responsive left community-image"
          />
          {communityMembers[0]['bio']}
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
          <img src={sarah} alt="Sarah Cooke" className="community-image" />
          <img src={kam} alt="Kam Kubesh" className="community-image" />
          <img
            src={require('../images/community/brandon-johnson.jpg')}
            alt="Brandon Johnson"
            className="community-image"
          />
          <img src={ian} alt="Ian Coldwater" className="community-image" />
        </div>
      </div>
    </section>
  );
};

export default Community;
