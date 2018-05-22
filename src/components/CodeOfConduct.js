import React, { Component } from 'react';
import { Button, Collapse, Dialog, Classes, Intent } from '@blueprintjs/core';
import CoCContent from './CoCContent';

class CodeOfConduct extends Component {
  state = {
    isCollapseOpen: false,
    isModalOpen: false
  };

  render() {
    return (
      <section id="code-of-conduct">
        <h2>Code of Conduct</h2>
        <p>
          We are dedicated to providing an open, welcoming, and inclusive
          community.<br />
          <br />
          As such, we have a Code of Conduct that we expect all of our members
          to follow.
        </p>

        <hr />
        <h3>Modal Example</h3>
        <Button text="Show Modal" onClick={this.toggleModal} />
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
              />
            </div>
          </div>
        </Dialog>

        <hr />
        <h3>Collapse Example</h3>
        <Button onClick={this.handleCollapseClick}>
          {this.state.isCollapseOpen ? 'Hide' : 'Show'} Collapse
        </Button>
        <br />
        <br />
        <Collapse isOpen={this.state.isCollapseOpen}>
          <CoCContent />
        </Collapse>
      </section>
    );
  }

  handleCollapseClick = () => {
    this.setState({
      ...this.state,
      isCollapseOpen: !this.state.isCollapseOpen
    });
  };

  toggleModal = () => {
    this.setState({ ...this.state, isModalOpen: !this.state.isModalOpen });
  };
}

export default CodeOfConduct;
