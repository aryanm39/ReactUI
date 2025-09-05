// import { createStore } from 'react-redux';
// import counterReducer from './counterReducer.jsx';
// const store = createStore(counterReducer);
// export default store;

import { createStore } from 'redux';
import counterReducer from './counterReducer.jsx';

const store = createStore(counterReducer);
export default store;
