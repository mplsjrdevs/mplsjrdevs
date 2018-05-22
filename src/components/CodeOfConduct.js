import React, { Component } from 'react';
import { Button, Dialog, Classes, Intent } from '@blueprintjs/core';
import CoCContent from './CoCContent';

class CodeOfConduct extends Component {
  state = { isModalOpen: false };

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
          <CoCContent />
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
  };
}

export default CodeOfConduct;
