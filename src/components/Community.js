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
    this.parsePersonIdFromURL() && this.scrollToCommunity();
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
            <div className="bio">
              {this.componentizedBio(this.state.featuredPerson)}
            </div>
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
    this.scrollToCommunity();
    clearInterval(this.intervalId);
  };

  parsePersonIdFromURL = () => {
    // parse pathname and return personId if on a community URL
    let pathName = window.location.pathname.split('/');
    return pathName[1] === 'community' ? pathName[2] : null;
  };

  scrollToCommunity() {
    // wait until document is loaded before scrolling
    if (
      window.document &&
      typeof window.document.createElement === 'function'
    ) {
      window.document.getElementById('community').scrollIntoView(true);
    }
  }

  componentizedBio = person => {
    // return bio if present, or "Hi, I'm person"
    if (person['bio']) {
      let FeaturedBio = person['bio'];
      return <FeaturedBio />;
    } else {
      let firstName = person['name'].slice(0, person['name'].indexOf(' '));
      return <div>{`Hi, I'm ${firstName}.`}</div>;
    }
  };
}

export default Community;
