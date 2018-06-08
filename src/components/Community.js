import React, { Component } from 'react';
import communityMembers from '../static/communityMembers';
import _ from 'lodash';

class Community extends Component {
  constructor() {
    super();
    var randomizedCommunityMembers = _.shuffle(communityMembers);
    this.state = {
      communityMembers: randomizedCommunityMembers,
      featuredPerson: randomizedCommunityMembers[0]
    };
  }

  componentWillMount() {
    // set featuredPerson if present in URL
    let personId = this.parsePersonIdFromURL();
    let featuredPerson =
      personId && _.find(this.state.communityMembers, ['id', personId]);

    if (featuredPerson) {
      this.setState({ ...this.state, featuredPerson: featuredPerson });
    } else {
      // rotate who's featured every 10 seconds
      this.intervalId = setInterval(() => {
        let currIndex = _.findIndex(this.state.communityMembers, [
          'id',
          this.state.featuredPerson.id
        ]);
        let nextIndex =
          currIndex + 1 === this.state.communityMembers.length
            ? 0
            : currIndex + 1;
        this.setState({
          ...this.state,
          featuredPerson: this.state.communityMembers[nextIndex]
        });
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
              {this.renderBio(this.state.featuredPerson)}
            </div>
          </div>
          <div className="images-container">
            {this.state.communityMembers.map(person => {
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
    window.history.pushState(null, '', `/community/${person.id}`);
    clearInterval(this.intervalId);
    this.scrollToCommunity();
    this.setState({ ...this.state, featuredPerson: person });
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

  renderBio = person => {
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
