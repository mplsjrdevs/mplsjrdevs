import React, { Component } from 'react';
import communityMembers from '../static/communityMembers';
import _ from 'lodash';

class Community extends Component {
  // randomly choose a community member to feature
  state = { featuredPerson: _.sample(communityMembers) };

  componentWillMount() {
    // set featuredPerson if present
    let personId = this.parsePersonIdFromURL();
    let featuredPerson = personId && _.find(communityMembers, ['id', personId]);

    if (featuredPerson) {
      this.setState({ featuredPerson: featuredPerson });
    } else {
      // rotate featured person every 10 seconds
      this.intervalId = setInterval(() => {
        this.setState({ featuredPerson: _.sample(communityMembers) });
      }, 10 * 1000);
    }
  }

  componentDidMount() {
    // scroll to community section if on a community URL
    this.parsePersonIdFromURL() && this.scrollTo('community');
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <section id="community">
        <h2>Community</h2>
        <div className="flex-container">
          <div className="carousel-container">
            <img
              src={this.state.featuredPerson['image']}
              alt={this.state.featuredPerson['name']}
              className="responsive center"
            />
            {this.componentizedBio(this.state.featuredPerson)}
          </div>
          <div className="images-container">
            {communityMembers.map(person => {
              return (
                <a
                  key={person.id}
                  href={`community/${person.id}`}
                  onClick={e => this.handleImageClick(e, person)}
                  className="image-overlay"
                >
                  <div className="overlay-text">{person['name']}</div>
                  <img
                    src={person['image']}
                    alt={person['name']}
                    className="community-image"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  handleImageClick = (e, person) => {
    e.preventDefault();
    this.setState({ ...this.state, featuredPerson: person });
    window.history.pushState(null, '', `/community/${person.id}`);
    this.scrollTo('community');
    clearInterval(this.intervalId);
  };

  parsePersonIdFromURL = () => {
    // parse pathname and return personId if on a community URL
    let pathName = window.location.pathname.split('/');
    return pathName[1] === 'community' ? pathName[2] : null;
  };

  scrollTo(location) {
    // wait until document is loaded before scrolling
    if (
      window.document &&
      typeof window.document.createElement === 'function'
    ) {
      window.document.getElementById(location).scrollIntoView(true);
    }
  }

  componentizedBio = person => {
    if (person['bio']) {
      // import bio component if present and return it
      let FeaturedBio = person['bio'];
      return <FeaturedBio />;
    } else {
      // otherwise, return "Hi, I'm person"
      let firstName = person['name'].slice(0, person['name'].indexOf(' '));
      return <div>{`Hi, I'm ${firstName}.`}</div>;
    }
  };
}

export default Community;
