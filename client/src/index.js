import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/fontawesome-free-brands';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

fontawesome.library.add(faFacebook, faTwitter, faInstagram);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
