import { createStore } from 'redux';
import counterReducer from './counterReducer.jsx';

const store = createStore(counterReducer);
export default store;
