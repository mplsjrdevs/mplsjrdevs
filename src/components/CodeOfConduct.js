import React, { Component } from 'react';
import { Button, Dialog, Classes, Intent } from '@blueprintjs/core';
import CodeOfConductContent from './CodeOfConductContent';

class CodeOfConduct extends Component {
  state = {
    // open modal if url ends with '/coc'
    isModalOpen: window.location.pathname === '/coc'
  };

  render() {
    return (
      <section id="code-of-conduct">
        <h2>Code of Conduct</h2>
        <p className="padded">
          We are dedicated to providing an open, welcoming, and inclusive
          community.
          <br />
          <br />
          As such, we have a code of conduct that we expect all of our members
          to follow.
        </p>
        <Button
          text="View Code of Conduct"
          className="CodeofConduct button"
          onClick={this.toggleModal}
        />
        <Dialog
          icon="document"
          isOpen={this.state.isModalOpen}
          onClose={this.toggleModal}
          title="Code of Conduct"
          className="CodeofConduct modal"
        >
          <CodeOfConductContent />
          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button
                text="Close"
                intent={Intent.PRIMARY}
                onClick={this.toggleModal}
                className="CodeofConduct button"
              />
            </div>
          </div>
        </Dialog>
      </section>
    );
  }

  toggleModal = () => {
    this.setState({ ...this.state, isModalOpen: !this.state.isModalOpen });
    // append '/coc' to url if modal was not already open
    window.history.pushState(null, '', !this.state.isModalOpen ? '/coc' : '/');
  };
}

export default CodeOfConduct;
