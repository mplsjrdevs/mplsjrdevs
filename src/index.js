import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// WHY WE UNREGISTER THE SERVICE WORKER
// Because this was built with Create React App, it had a service worker in
// place by default, but this is unnecessary. In order to ensure the SW is
// removed, we'll need to leave this funcion call in place in perpetuity.
unregister();
