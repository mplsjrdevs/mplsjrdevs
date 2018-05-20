import React from 'react';
import ReactDOM from 'react-dom';

//first option used to render images in grid
//images render, but are not responsive
//import {  Row, Col } from 'react-simple-flex-grid';
//import "react-simple-flex-grid/lib/main.css";

//second option used to render images in gride
//react-responsive-modal package
import Modal from 'react-responsive-modal';

export default class Community extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="example">
        <h4>Centered modal</h4>
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Open
        </button>{' '}
        <a
          href="https://github.com/pradel/react-responsive-modal/blob/master/docs/src/examples/centered.js"
          target="_blank"
        >
          See source code
        </a>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Member Name</h2>
          <p>
            <img
              src={require('../images/mplsjrdevs-logo-color.svg')}
              style={{ width: 40, height: 40 }}
            />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
      </div>
    );
  }
}

//export default Community;
//export default Centered;

// //use require method for images since we are using webpack
// //can also import images and then reference them later on in JSX code
// const Community = () => {
//   return (
//   <Row>
//     {/* <Col xs={12}>
//     <img src={require('../images/mplsjrdevs-logo-color.svg')} style={{width: 40, height: 40}}/>
//       <p>Member Name</p>
//     </Col> */}

//     <Col span={4} order={4}><img src={require('../images/mplsjrdevs-logo-color.svg')} style={{width: 40, height: 40}}/>
//     </Col>
//     <Col span={4} order={3}><img src={require('../images/mplsjrdevs-logo-color.svg')} style={{width: 40, height: 40}}/></Col>
//     <Col span={4} order={2}><img src={require('../images/mplsjrdevs-logo-color.svg')} style={{width: 40, height: 40}}/>
//     </Col>
//     <Col span={4} order={1}><img src={require('../images/mplsjrdevs-logo-color.svg')} style={{width: 40, height: 40}}/>
//     </Col>

//     <Col span={4} order={8}><img src={require('../images/mplsjrdevs-logo-color.svg')} style={{width: 40, height: 40}}/>
//     </Col>
//     <Col span={4} order={7}><img src={require('../images/mplsjrdevs-logo-color.svg')} style={{width: 40, height: 40}}/></Col>
//     <Col span={4} order={6}><img src={require('../images/mplsjrdevs-logo-color.svg')} style={{width: 40, height: 40}}/>
//     </Col>
//     <Col span={4} order={5}><img src={require('../images/mplsjrdevs-logo-color.svg')} style={{width: 40, height: 40}}/>
//     </Col>
//     <Col span={4} order={5}><img src={require('../images/mplsjrdevs-logo-color.svg')} style={{width: 40, height: 40}}/>
//     </Col>
//     </Row>
//   );
//   //render method
//   ReactDOM.render(Community, document.getElementById('root'));
// };

// export default Community;
