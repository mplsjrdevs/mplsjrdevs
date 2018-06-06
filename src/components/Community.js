import React, { Component } from 'react';
import communityMembers from '../static/communityMembers';
import _ from 'lodash';

class Community extends Component {
  // randomly select a community member to feature by default
  state = { featuredPerson: _.sample(communityMembers) };

  componentWillMount() {
    // parse personId from URL
    let personId = this.getPersonIdFromURL();

    // try to find featured person if present
    let featuredPerson = personId && _.find(communityMembers, ['id', personId]);

    if (featuredPerson) {
      this.setState({ featuredPerson: featuredPerson });
    }
  }

  componentDidMount() {
    // scroll to community section if user navigated directly to a community URL
    if (this.getPersonIdFromURL()) {
      // wait until document is loaded before scrolling
      if (
        window.document &&
        typeof window.document.createElement === 'function'
      ) {
        window.document.getElementById('community').scrollIntoView(true);
      }
    }
  }

  getPersonIdFromURL = () => {
    // split URL pathname into an array
    let path = window.location.pathname.split('/');

    // return second part of path if first part is 'community'
    return path[1] === 'community' ? path[2] : null;
  };

  render() {
    let FeaturedBio = this.state.featuredPerson['bio'];
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
            {this.state.featuredPerson['bio'] && <FeaturedBio />}
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
  };
}

export default Community;

// <div className="bio" dangerouslySetInnerHTML={{ __html: this.state.featuredPerson['bio']}}></div>
